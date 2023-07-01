import { safePromiseAll } from "../safe-promise-all.ts"
import {
  assertEquals,
  assertInstanceOf,
} from "std/testing/asserts"

async function err(){
  throw new Error("Error...")
}
async function success(){
  return "Success!"
}

Deno.test("No error", async () => {
  await safePromiseAll([success(), err()])
})
Deno.test("Return test", async () => {
  assertEquals((await safePromiseAll([success()]))[0], "Success!")
})
Deno.test("Error test", async () => {
  assertInstanceOf((await safePromiseAll([err()]))[0], Error)
})