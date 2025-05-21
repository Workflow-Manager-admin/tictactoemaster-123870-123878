#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoemaster-123870-123878/main_container_for_tictactoemaster
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

