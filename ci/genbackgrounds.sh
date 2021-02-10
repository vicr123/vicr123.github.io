#!/bin/bash

echo -n "[\"\""
for folder in ../static/theshell/backgrounds/*; do
    if [ -f "$folder/metadata.json" ]; then
        echo -n ",\"/${folder#*/*/}/metadata.json\""
    fi
done
echo -n "]"
