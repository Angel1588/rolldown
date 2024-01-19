#[cfg(all(not(debug_assertions), not(target_os = "wasi")))]
#[global_allocator]
static ALLOC: mimalloc_rust::GlobalMiMalloc = mimalloc_rust::GlobalMiMalloc;

pub mod bundler;
pub mod options;
pub mod output;
pub mod utils;
scoped_tls::scoped_thread_local!(static NAPI_ENV: napi::Env);
