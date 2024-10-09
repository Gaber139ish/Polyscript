// javascript_module.js

// Load Pyodide, then use it to run Python code
async function loadPyodideAndRun() {
    const pyodide = await loadPyodide();
    
    // Python code to run
    const pythonCode = `
    def add(a, b):
        return a + b
    `;

    // Execute the Python code
    await pyodide.runPythonAsync(pythonCode);

    // Now you can call the Python function from JavaScript
    const result = pyodide.runPython("add(2, 3)");
    console.log("Result from Python:", result);
}

loadPyodideAndRun();
