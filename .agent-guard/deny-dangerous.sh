#!/bin/bash
# Global agent command guard.
# Blocks catastrophic shell commands before agents run them.
# Denylist: dangerous-patterns.txt beside this script (one ERE regex per line).
#
# Used by:
#   Claude Code  ~/.claude/settings.json  PreToolUse (matcher Bash)
#   Codex        ~/.codex/hooks.json      PreToolUse (matcher Bash)
#   Cursor       ~/.cursor/hooks.json     beforeShellExecution (arg: cursor)
#   Antigravity  .agents/hooks.json       PreToolUse (matcher run_command, arg: antigravity)
#
# stdin:  hook JSON. Claude/Codex put the command at .tool_input.command,
#         Cursor at .command, Antigravity at .toolCall.args.CommandLine.
# Block:  default mode     -> exit 2 + reason on stderr (Claude/Codex contract).
#         "cursor" mode      -> {"permission":"deny",...} JSON on stdout, exit 0.
#         "antigravity" mode -> {"decision":"deny","reason":...} JSON on stdout, exit 0.
# Allow:  default mode     -> exit 0, silent.
#         "cursor" mode      -> {"permission":"allow"} on stdout.
#         "antigravity" mode -> {"decision":"allow"} on stdout.

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# Resolve the denylist next to this script, following symlinks, so installing
# the guard by symlink cannot separate it from the patterns it enforces.
src=$0
while [ -L "$src" ]; do
  dir=$(CDPATH= cd -- "$(dirname -- "$src")" && pwd -P)
  src=$(readlink "$src")
  case $src in /*) ;; *) src=$dir/$src ;; esac
done
here=$(CDPATH= cd -- "$(dirname -- "$src")" && pwd -P)
PATTERNS_FILE="${AGENT_GUARD_PATTERNS:-$here/dangerous-patterns.txt}"
MODE="${1:-exitcode}"

allow() {
  if [ "$MODE" = "cursor" ]; then
    printf '{"permission":"allow"}\n'
  elif [ "$MODE" = "antigravity" ]; then
    printf '{"decision":"allow"}\n'
  fi
  exit 0
}

# Fail closed. A guard that cannot read the command is not a guard, and staying
# silent about it is indistinguishable from protection. Every message below
# names the single repair, because a blocked session cannot run the repair
# itself -- a human has to type it in a terminal.
deny_broken() {
  if [ "$MODE" = "cursor" ]; then
    printf '{"permission":"deny","user_message":"Command guard is misconfigured and is blocking every command.","agent_message":"%s"}\n' "$1"
    exit 0
  elif [ "$MODE" = "antigravity" ]; then
    jq -cn --arg r "$1" '{decision: "deny", reason: $r}'
    exit 0
  fi
  echo "$1" >&2
  exit 2
}

command -v jq >/dev/null 2>&1 || deny_broken "Command guard cannot inspect the command: jq is not on PATH. The guard fails closed, so every command stays blocked until a human runs 'brew install jq' in a terminal, or removes the deny-dangerous PreToolUse hook from ~/.claude/settings.json."

[ -f "$PATTERNS_FILE" ] || deny_broken "Command guard has no denylist at $PATTERNS_FILE. The guard fails closed, so every command stays blocked until dangerous-patterns.txt is restored beside deny-dangerous.sh, or the PreToolUse hook is removed from ~/.claude/settings.json."

INPUT=$(cat)
# .toolCall.args.CommandLine = Antigravity, .tool_input = Claude/Codex, .toolInput = Grok CLI, .command = Cursor
CMD=$(printf '%s' "$INPUT" | jq -r '.toolCall.args.CommandLine // .tool_input.command // .toolInput.command // .command // empty' 2>/dev/null)

[ -z "$CMD" ] && allow

while IFS= read -r pattern; do
  case "$pattern" in ''|\#*) continue ;; esac
  if printf '%s\n' "$CMD" | grep -qE -- "$pattern" 2>/dev/null; then
    if [ "$MODE" = "cursor" ]; then
      jq -cn --arg p "$pattern" --arg f "$PATTERNS_FILE" '{
        permission: "deny",
        user_message: "Command guard blocked a dangerous command.",
        agent_message: ("This command was blocked by the global dangerous-command guard (" + $f + "). Matched pattern: " + $p + ". Do not retry it or try to work around the guard; explain the block to the user instead.")
      }'
      exit 0
    elif [ "$MODE" = "antigravity" ]; then
      jq -cn --arg p "$pattern" --arg f "$PATTERNS_FILE" '{
        decision: "deny",
        reason: ("Blocked by the global dangerous-command guard (" + $f + "). Matched pattern: " + $p + ". Do not retry it or try to work around the guard; explain the block to the user instead.")
      }'
      exit 0
    fi
    echo "Blocked by the global dangerous-command guard ($PATTERNS_FILE). Matched pattern: $pattern. Do not retry it or try to work around the guard; explain the block to the user instead." >&2
    exit 2
  fi
done < "$PATTERNS_FILE"

allow
