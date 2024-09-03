# Minimum CMake version
cmake_minimum_required(VERSION 3.30)

# Define the project name and version
project(Lekh VERSION 1.0 LANGUAGES CXX)

# Set the C++ standard to C++20
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Enable compiler warnings (for both GCC/Clang and MSVC)
if (MSVC)
    add_compile_options(/W4)
else()
    add_compile_options(-Wall -Wextra -pedantic)
endif()

# Create the executable for the project
add_executable(Lekh src/main.cpp)

# Include header files from the "include" directory
include_directories(include)

# Enable CMake's testing support
enable_testing()

# Add subdirectory for tests
add_subdirectory(tests)
