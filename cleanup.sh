#!/usr/bin/env bash

echo "=== Cleaning unused dependencies ==="

# Unused dependencies
npm uninstall @capacitor/android \
  @capacitor/cli \
  @capacitor/ios \
  @capacitor/splash-screen

echo "=== Cleaning unused devDependencies ==="

npm uninstall --save-dev \
  @babel/preset-env \
  @babel/preset-react \
  @babel/preset-typescript \
  @capacitor/assets \
  @tailwindcss/postcss \
  @testing-library/user-event \
  @types/jest \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @vitest/coverage-v8 \
  autoprefixer \
  eslint-formatter-compact \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  globals \
  identity-obj-proxy \
  jest \
  jest-environment-jsdom \
  postcss \
  tailwindcss \
  ts-jest

echo "=== Installing missing dependency ==="

npm install -D @tailwindcss/vite

echo "=== Clearing caches ==="

rm -rf node_modules/.vite
rm -rf node_modules/.cache

echo "=== Reinstalling dependencies ==="

npm install

echo "=== Cleanup complete ==="
