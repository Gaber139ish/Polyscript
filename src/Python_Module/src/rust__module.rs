// rust_module.rs

use pyo3::prelude::*;

// Example function to be exposed to Python
#[pyfunction]
fn add(a: i32, b: i32) -> PyResult<i32> {
    Ok(a + b)
}

// This creates the Python module
#[pymodule]
fn rust_module(py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(add, m)?)?;
    Ok(())
}
