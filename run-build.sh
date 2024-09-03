#!/bin/bash

# Define color variables
CYAN='\033[0;36m'
RESET='\033[0m'  # Reset text format to default

echo -e "${CYAN}"
echo -e "[Runner] building project"
echo -e "${RESET}"

# Making build directory
rm -rf ./build
mkdir ./build
cd ./build

# Making build
cmake ..
cmake --build .

echo -e "${CYAN}"
echo -e "[Runner] build completed"
echo -e "[Runner] running build"
echo -e "${RESET}"

# Running project
./Lekh

echo -e "${CYAN}"
echo -e "[Runner] running completed"
echo -e "${RESET}"