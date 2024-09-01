# Enable CMake's testing support
enable_testing()

# Add an executable for running unit tests
add_executable(TestExample test.cpp)

# Link the test executable with the shared LekhLib library
# target_link_libraries(TestExample PRIVATE LekhLib)

# Include the header files from the main project
target_include_directories(TestExample PRIVATE ${CMAKE_SOURCE_DIR}/include)

# Register the test with CMake's testing framework
add_test(NAME ExampleOfTest COMMAND TestExample)