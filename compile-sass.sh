#!/bin/bash

if ! command -v node-sass &> /dev/null; then
  echo "node-sass is not installed. Please install it globally using:"
  echo "npm install -g node-sass"
  exit 1
fi

node-sass styles.scss styles.css
