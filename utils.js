'use strict'

//. utils that work on both server and client

//* only works in async functions, and the proper syntax is "await sleep(ms)". "sleep(ms)" by itself without await does nothing (i presume)
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}