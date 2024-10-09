# CMakeLists.txt

cmake_minimum_required(VERSION 3.12)
project(python_module)

# Use pybind11
find_package(pybind11 REQUIRED)

add_library(cpp_module SHARED cpp_module.cpp)

# Link pybind11 and Python libraries
target_link_libraries(cpp_module PRIVATE pybind11::module)
