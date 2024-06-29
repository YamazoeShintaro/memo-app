## フロントエンド技術課題

## インストール（ルートディレクトリ）

```bash
# install
$ yarn install
```

## インストール（backendディレクトリ）

```bash
# backendディレクトリに移動
$ cd backend
# install
$ yarn install
# migration
$ yarn migration:run
```

## インストール（frontendディレクトリ）

```bash
# frontendディレクトリに移動
$ cd frontend
# install
$ yarn install
```

## 実行

```bash
# start build
$ yarn build
# 実行
$ yarn start
```

## DB を初期状態に戻す

```bash
$ cp ./backend/data/bk-dev.sqlite ./backend/data/dev.sqlite
```