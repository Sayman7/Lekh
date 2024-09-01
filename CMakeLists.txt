# Minimum CMake version
cmake_minimum_required(VERSION 3.10)

# Define the project name and version
project(Lekh VERSION 1.0 LANGUAGES CXX)

# Set the C++ standard to C++17
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Enable compiler warnings (for both GCC/Clang and MSVC)
if (MSVC)
    add_compile_options(/W4)
else()
    add_compile_options(-Wall -Wextra -pedantic)
endif()

# Define the source files for the project
set(SOURCES
    src/main.cpp
    # src/file1.cpp
    # src/file2.cpp
    # src/index.html
    # ... (and so on)
)

# Include header files from the "include" directory
include_directories(include)

# Create a library for shared source code
# add_library(LekhLib
    # src/Lexer.cpp
    # src/Parser.cpp
    # ... (shared file)
# )

# Create the executable for the project
add_executable(Lekh src/main.cpp)

# Link the Lekh executable with the shared LekhLib library
# target_link_libraries(Lekh PRIVATE LekhLib)

# Add subdirectory for tests (make sure this is after Lekh is defined)
add_subdirectory(tests)
