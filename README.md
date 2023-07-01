# Safe promise all
Safe promise all
## なにこれ
```ts
await 認証()
await Promise.all([
    会社情報(),
    取引一覧(),
])
```
これがどっちかがエラー起こったらアウトだからクソコードらしいです...
これを解決してやります！

エラーが起こったときにエラーを出さずにエラーを返すのです!
## つかいかた
```ts
async function err(){
  throw new Error("Error...")
}
async function success(){
  return "Success!"
}
const result = await safePromiseAll([
  err(), success(),
])
console.log(result)
/*
 > [
    <Error>,
    "Success!"
 ]
*/
```
## 導入
### いろいろ
[safe-promise-all.ts](./safe-promise-all.ts)
を自力で変形させて、プロジェクトに組み込んでください。

JSのみの場合は型を削除したりしてください。

そのまま使いたいなら`export`消したりしてください。
### Deno
```ts
import { safePromiseAll } from "https://deno.land/x/safe_promise_all/safe-promise-all.ts"
```
### npm
Nodeなんか使わずに[Deno](https://deno.land)使いましょう!

npmはしりません!

~~ビルドプログラムとpublishがめんどくさいなんて言えない~~
