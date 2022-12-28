## 環境構築

backendディレクトリにて以下コマンドを時効する
```
# コンテナ起動
make up
```

サーバーが立ち上がる
http://localhost:8100/

## 初期構築
```
make setup
```

型定義生成
```
make genapi
```

## deno 
### tsファイルの叩き方
```
make exec-container
deno run src/hello.ts
```

*Denoは標準でファイル、ネットワーク、環境変数等にアクセスすることができないセキュアな設定になっています。ネットワークを許可するには--allow-netオプションを付与して実行します。

### deps.ts
VSCodeを使用している場合、以下のようなエラーが出る時がある。
```
Uncached or missing remote URL
```

その場合は、コマンドパレット(cmd + shift + p)を起動し、
「Deno: Cache Dependencies」を実行すると良い
https://deno.land/manual@v1.25.4/vscode_deno#caching-remote-modules