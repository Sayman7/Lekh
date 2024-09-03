# Add an executable for running unit tests
add_executable(TestExample test.cpp)

# Include the header files from the main project
target_include_directories(TestExample PRIVATE ${CMAKE_SOURCE_DIR}/include)

# Register the test with CMake's testing framework
add_test(NAME ex_test COMMAND TestExample)