#!/bin/sh
# Sikistirma yigini dogrulama kapisi.
# Kurallar: .agent-guard/compression-invariants.md
# Kullanim: ./.agent-guard/verify-compression.sh
set -u

HEADROOM_BIN="${HEADROOM_BIN:-$HOME/.local/bin/headroom}"
PROXY_URL="${PROXY_URL:-http://127.0.0.1:8787}"
ZEROMCP_CLI="${ZEROMCP_CLI:-/opt/homebrew/lib/node_modules/zeromcp/dist/src/cli.js}"
PROJECT_SETTINGS=".claude/settings.json"
LOCAL_SETTINGS=".claude/settings.local.json"
FAILED=0

ok()  { printf 'YESIL   %s\n' "$1"; }
bad() { printf 'KIRMIZI %s -- %s\n' "$1" "$2"; FAILED=1; }

STATS="$(curl -fsS "$PROXY_URL/stats" 2>/dev/null || true)"

# 1. proxy_mode -- Degismez 3: kalici mod daima cache olmali.
if [ -n "$STATS" ] && printf '%s' "$STATS" | jq -e '.summary.mode == "cache"' >/dev/null 2>&1; then
  ok "proxy_mode (cache)"
else
  bad "proxy_mode" "proxy $PROXY_URL adresinde yok veya mod cache degil"
fi

# Ayarlari birlestir (settings.json taban, settings.local.json varsa ustune biner)
if [ -f "$PROJECT_SETTINGS" ] && [ -f "$LOCAL_SETTINGS" ]; then
  MERGED_SETTINGS="$(jq -s '.[0] * .[1]' "$PROJECT_SETTINGS" "$LOCAL_SETTINGS" 2>/dev/null || true)"
elif [ -f "$PROJECT_SETTINGS" ]; then
  MERGED_SETTINGS="$(cat "$PROJECT_SETTINGS" 2>/dev/null || true)"
else
  MERGED_SETTINGS=""
fi

# 2. tool_search -- sema tokenlarinin istemci tarafinda ertelenmesi.
if [ -n "$MERGED_SETTINGS" ] && printf '%s' "$MERGED_SETTINGS" | jq -e '.env.ENABLE_TOOL_SEARCH == "true"' >/dev/null 2>&1; then
  ok "tool_search (true)"
else
  bad "tool_search" ".claude ayarlari icinde ENABLE_TOOL_SEARCH=true yok"
fi

# 3. zeromcp_bin -- MCP ag gecidi calistirilabilir olmali.
if [ -x "$ZEROMCP_CLI" ]; then
  ok "zeromcp_bin (calistirilabilir)"
else
  bad "zeromcp_bin" "$ZEROMCP_CLI calistirma bitine sahip degil"
fi

# 4. compressors -- cift islemeyi onleyen acik compressor listesi.
if [ -n "$MERGED_SETTINGS" ] && printf '%s' "$MERGED_SETTINGS" | jq -e '.env.HEADROOM_COMPRESSORS == "kompress,search,log,config"' >/dev/null 2>&1; then
  ok "compressors (kompress,search,log,config)"
else
  bad "compressors" ".claude ayarlari icinde HEADROOM_COMPRESSORS beklenen degerde degil"
fi

# 5. budget -- calisan proxy'de harcama tavani (10 USD/gun) aktif olmali.
if [ -n "$STATS" ] && printf '%s' "$STATS" | jq -e '.cost.budget_limit_usd == 10' >/dev/null 2>&1; then
  ok "budget (enforced: 10 USD/gun)"
else
  bad "budget" "calisan proxy 10 USD butce uygulamasina sahip degil (.cost.budget_limit_usd != 10)"
fi

# 6. deployment -- yeniden baslatmaya dayanikli kalici servis calisiyor olmali.
STATUS_OUTPUT="$("$HEADROOM_BIN" install status --profile default 2>&1 || true)"
if printf '%s\n' "$STATUS_OUTPUT" | grep -E -q 'Status:[[:space:]]+running'; then
  ok "deployment (kalici servis calisiyor)"
else
  bad "deployment" "kalici Headroom servisi calismiyor (status: stopped)"
fi

# 7. net_positivity -- Degismez 2 ve 6: gercek tokenizer, pozitif tasarruf.
if "$HEADROOM_BIN" savings --json 2>/dev/null | jq -e '.lifetime.savings_percent > 0' >/dev/null 2>&1; then
  ok "net_positivity (savings_percent > 0)"
else
  bad "net_positivity" "savings defteri pozitif tasarruf gostermiyor"
fi

if [ "$FAILED" -ne 0 ]; then
  printf '\nSikistirma kapisi KIRMIZI.\n'
  exit 1
fi
printf '\nSikistirma kapisi YESIL.\n'
exit 0
