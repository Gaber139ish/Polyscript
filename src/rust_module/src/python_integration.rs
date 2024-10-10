[lib]
crate-type = ["cdylib"]


use pyo3::prelude::*;
use pyo3::types::PyModule;

pub fn call_python_function() -> PyResult<()> {
    let gil = Python::acquire_gil();
    let py = gil.python();
    
    let math = PyModule::import(py, "math")?;
    let result: f64 = math.call1("sqrt", (16.0,))?.extract()?;
    
    println!("Square root of 16 is: {}", result);
    Ok(())
}
