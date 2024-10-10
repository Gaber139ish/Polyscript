fn main() {
    cxx_build::bridge("src/cpp_integration.rs")
        .file("src/cpp_integration/cpp_code.cpp")
        .flag_if_supported("-std=c++11")
        .compile("cpp_integration");
    
    println!("cargo:rerun-if-changed=src/cpp_integration/cpp_code.cpp");
}
