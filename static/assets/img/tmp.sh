#!/usr/bin/env bash

for i in $(seq 7 44)
do
    imageoptim mlutd${i}.*jpg mlutd${i}*.png
done

