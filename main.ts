import { safePromiseAll } from "./safe-promise-all.ts"

async function err(){
  throw new Error("Error...")
}
async function success(){
  return "Success!"
}
console.log(await safePromiseAll([
  success(),err(),
])) 