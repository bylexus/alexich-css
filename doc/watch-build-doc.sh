#!/bin/sh
# This utility watches for changes in .md files using 'entr' and builds the doc.

ls *.md | entr ./build-doc.sh
