#!/bin/bash
pushd ci
./genbackgrounds.sh > ../static/theshell/backgrounds/backgrounds.json
popd

docusaurus build