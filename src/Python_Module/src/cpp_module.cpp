// cpp_module.cpp
#include <pybind11/pybind11.h>

namespace py = pybind11;

// Example function exposed to Python
int add(int a, int b) {
    return a + b;
}

// This creates the Python bindings
PYBIND11_MODULE(cpp_module, m) {
    m.def("add", &add, "A function that adds two numbers");
}
