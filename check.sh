#!/bin/sh
set -e

echo "=== Bumex Garage Website: Tip Kontrolü (TypeScript) ==="
npm run typecheck

echo "=== Bumex Garage Website: SEO & Entity Doğrulaması ==="
npm run test:seo

echo "=== Bumex Garage Website: Derleme Kontrolü (Next.js Build) ==="
npm run build

echo "=== Doğrulama Başarılı! ==="
