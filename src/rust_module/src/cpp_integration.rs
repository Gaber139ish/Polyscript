#[cxx::bridge]
mod ffi {
    extern "C++" {
        include!("cpp_integration/cpp_header.h");
        fn hello_cpp() -> String;
    }
}

pub fn call_cpp_function() {
    let result = ffi::hello_cpp();
    println!("C++ function returned: {}", result);
}
