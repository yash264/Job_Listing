#!/usr/bin/env bash
set -e
echo "Installing frontend dependencies..."
cd "$(dirname "$0")"
npm install
echo "Starting dev server..."
npm run dev
