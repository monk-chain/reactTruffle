# React Truffle Box

https://github.com/truffle-box/react-box
からフォークししました。
学習のためのリポジトリです。

## 仕様コマンド

#### Ganache

`truffle-config.js`を読み取る
networkが立ち上がる

***

#### Truffle

```

truffle migrate --network development

```

migrate のネットワークを指定する

```

truffle console

```



対話


```

const Contract = await Contract.deployed();

```

コントラクト初期化

```

const Contract = await Contract.at(コントラクトアドレス)

```

コントラクト本人の初期化

> 注意
<!-- :::note warn -->
コントラクトアドレスのコントラクト初期化と、
コントラクトの初期化は別物です！
<!-- ::: -->

