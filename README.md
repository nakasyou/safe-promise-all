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