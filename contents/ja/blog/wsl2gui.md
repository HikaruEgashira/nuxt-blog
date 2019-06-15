---
name: 'create-myblog-with-nuxt0'
trans: '404'
title: WSL2でGUIを起動したい(VcXsrv)
year: 28 May 2019
color: '#edece7'
isTextColorDark: true
noMainImage: true
extraComponent: 'Datatable'
id: 'design-and-code-skeletons-screens'
description: |
  fastプレビューの内容です
---

## 目的

[WSLでmatplotlibやgnuplotでプロットができない - Qiita](https://qiita.com/ryoi084/items/c4339996c50c0cf39df4)
のWSL2版です。
こちらでは解決策だけを書くので、詳細は上の記事を参考にしてください。

## 環境

OS Windows

6月15日fastリング
バージョン 1903
OSビルド 18917.1000

## なぜこれまで通りのやり方でできないのか

WSL 2は仮想マシンで実行されるようになったため。
wsl2側ではlocalhostを認識してくれないつくりになりました。

参考

[WSL 2 is now available in Windows Insiders - devblogs.microsoft.com](https://devblogs.microsoft.com/commandline/wsl-2-is-now-available-in-windows-insiders/)

## 解決方法

以下の記事を参考に行いました。

[Ubuntu Linux With GUI On Windows Wsl/Wsl2](http://www.uhoditv.org/ubuntu-linux-with-gui-on-windows-wsl-wsl2/)

- Windows IP 構成の確認

```bash
>ipconfig

イーサネット アダプター vEthernet (Default Switch):

   接続固有の DNS サフィックス . . . . .:
   リンクローカル IPv6 アドレス. . . . .: fe80::dc30:e9fb:b740:7f88%23
   IPv4 アドレス . . . . . . . . . . . .: 172.17.150.177
   サブネット マスク . . . . . . . . . .: 255.255.255.240
   デフォルト ゲートウェイ . . . . . . .:

イーサネット アダプター vEthernet (DockerNAT):

   接続固有の DNS サフィックス . . . . .:
   リンクローカル IPv6 アドレス. . . . .: fe80::41da:c4a1:5e06:539a%24
   IPv4 アドレス . . . . . . . . . . . .: 10.0.75.1
   サブネット マスク . . . . . . . . . .: 255.255.255.0
   デフォルト ゲートウェイ . . . . . . .:

イーサネット アダプター vEthernet (WSL):

   接続固有の DNS サフィックス . . . . .:
   リンクローカル IPv6 アドレス. . . . .: fe80::fdcf:ad14:1a94:a48e%52
   IPv4 アドレス . . . . . . . . . . . .: 192.168.255.49
   サブネット マスク . . . . . . . . . .: 255.255.255.240
   デフォルト ゲートウェイ . . . . . . .:

.
.
.
```

WSLの欄のIPv4アドレス(ここでは192.168.255.49)をWSLのDISPLAYに設定してあげると良さそう。

- wsl2の~/.bachrc(~/.zshrc)のDISPLAYをこのアドレスで設定

```
export DISPLAY=192.168.255.49:0
```

を追加したら無事描画されます。

ためしにgetitを実行してみると

```bash
-> % gedit
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/273096/03a10775-879e-6d72-5488-83b5a30e8e15.png)

うまく表示されました。