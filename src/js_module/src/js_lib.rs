use neon::prelude::*;

fn hello_world(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("Hello from Rust!"))
}

register_module!(mut cx, {
    cx.export_function("helloWorld", hello_world)
});
