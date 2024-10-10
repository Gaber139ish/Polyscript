// Import Node.js core modules
const { spawn } = require('child_process');
const fs = require('fs');

// Import the C++ addon
const cppAddon = require('./build/Release/addon');

// Import the Rust addon (assuming you used Neon to build it)
const rustAddon = require('./native');

// Python Integration: Function to call Python script
function runPython(scriptPath, args = []) {
    return new Promise((resolve, reject) => {
        const py = spawn('python3', [scriptPath, ...args]);

        py.stdout.on('data', (data) => {
            resolve(data.toString());
        });

        py.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

// Example usage of Python script
runPython('script.py', ['arg1', 'arg2'])
    .then(output => console.log('Python output:', output))
    .catch(error => console.error('Python error:', error));

// Example usage of C++ Addon
console.log('C++ Addon Output:', cppAddon.helloWorld());

// Example usage of Rust Addon
console.log('Rust Addon Output:', rustAddon.helloWorld());

// Example usage of Node.js native modules
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('File read error:', err);
        return;
    }
    console.log('File content:', data);
});
