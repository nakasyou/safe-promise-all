type SafePromiseAll = <T extends readonly unknown[] | []>(values: T) => Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>

/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises
 * @param values An array of Promises.
 * @returns A new Promise.
 */
export const safePromiseAll = (function (promsies) {
  const safePromises = promsies.map(promise => {
    return (async () => {
      try{
        return await promise
      }catch (error) {
        return error
      }
    })()
  })
  return Promise.all(safePromises)
}) as SafePromiseAll
