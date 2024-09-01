#!/bin/bash

echo "Building project..."
echo ""

cd ./build
cmake ..
cmake --build .

echo ""
echo "Build run finished!"
echo "Running build..."
echo ""

./Lekh

echo ""
echo "Build run successfully!"

