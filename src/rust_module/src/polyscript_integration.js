import init, { call_js_function } from './pkg/polyscript_integration.js';

async function run() {
    await init();
    console.log(call_js_function());  // "Hello from Rust!"
}

run();
