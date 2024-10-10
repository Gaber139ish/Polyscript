# setup.py

from setuptools import setup, Extension
import os
from glob import glob

# Example of using pybind11 for C++ extension
from pybind11.setup_helpers import Pybind11Extension, build_ext

ext_modules = [
    Pybind11Extension("cpp_module",  # The module name for the C++ extension
                      sorted(glob("src/*.cpp")),  # The C++ source files
                      ),
]

setup(
    name="python_module",
    version="0.1",
    author="Your Name",
    author_email="your.email@example.com",
    description="A Python module with bindings to C++, Rust, and JavaScript",
    ext_modules=ext_modules,
    cmdclass={"build_ext": build_ext},
    packages=["python_module"],
    zip_safe=False,
)
