use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn call_js_function() -> String {
    let message = "Hello from Rust!";
    message.to_string()
}
