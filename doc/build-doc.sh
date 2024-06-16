#!/bin/sh
# This utility builds the doc using pandoc.

for f in *.md; do
        cat "$f" 
        echo "\n"
    done | pandoc \
        -f markdown \
        -t html \
        -s \
        --template=template.html \
        --toc \
        --title="alexich-css Documentation" \
        -o index.html
echo "$(date): Done building documentation."
