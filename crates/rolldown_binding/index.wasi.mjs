/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

import * as __nodeFsPromises from 'node:fs/promises'
import * as __nodePath from 'node:path'
import { WASI as __nodeWASI } from 'node:wasi'
import { Worker } from 'node:worker_threads'
import * as __nodeURL from 'node:url'

import { instantiateNapiModule as __emnapiInstantiateNapiModule } from '@emnapi/core'
import { getDefaultContext as __emnapiGetDefaultContext } from '@emnapi/runtime'

const __wasi = new __nodeWASI({
  env: process.env,
  preopens: {
    '/': __nodePath.join(__nodeURL.fileURLToPath(import.meta.url), '..'),
  }
})

const __dirname = __nodePath.join(__nodeURL.fileURLToPath(import.meta.url), '..')

const __emnapiContext = __emnapiGetDefaultContext()

const __sharedMemory = new WebAssembly.Memory({
  initial: 1024,
  maximum: 10240,
  shared: true,
})

const { instance: __napiInstance, module: __wasiModule, napiModule: __napiModule } = await __emnapiInstantiateNapiModule(__nodeFsPromises.readFile(__nodePath.join(__dirname, 'index.wasm32-wasi-preview1-threads.wasi-wasm32.wasm')), {
  context: __emnapiContext,
  asyncWorkPoolSize: 4,
  wasi: __wasi,
  onCreateWorker() {
    return new Worker(__nodePath.join(__dirname, 'wasi-worker.mjs'), {
      env: process.env,
      execArgv: ['--experimental-wasi-unstable-preview1'],
    })
  },
  overwriteImports(importObject) {
    importObject.env = {
      ...importObject.env,
      ...importObject.napi,
      ...importObject.emnapi,
      memory: __sharedMemory,
    }
  },
  beforeInit({ instance }) {
    __napi_rs_initialize_modules(instance)
  }
})

function __napi_rs_initialize_modules(__napiInstance) {
  __napiInstance.exports['__napi_register__Bundler_struct_0']()
  __napiInstance.exports['__napi_register__Bundler_impl_1']()
}

const binding = __napiModule.exports
const { Bundler } = binding
export {
  Bundler
}