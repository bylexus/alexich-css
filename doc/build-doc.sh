#!/bin/sh
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

