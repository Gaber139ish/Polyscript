const { spawn } = require('child_process');

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

// Example usage:
runPython('script.py', ['arg1', 'arg2'])
    .then((output) => console.log(output))
    .catch((error) => console.error(error));
