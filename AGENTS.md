# Repo Guidelines

このリポジトリは TypeScript と React を用いたリバーシアプリのサンプルです。

```
/AGENTS.md       ガイドライン
/README.md       説明
/package.json    npm 設定
/tsconfig.json   TypeScript 設定
/jest.config.js  Jest 設定
/public          静的ファイル
/src             ソースコード
  /components    React コンポーネント
  /utils         ゲームロジック
/tests           テストコード
```

## スタイル
- 変数・関数名は `camelCase`。
- コメントは日本語。
- React は関数コンポーネントで記述。

## コマンド例
- `npm run build` : TypeScript をコンパイル。
- `npm test` : Jest でテスト実行。
