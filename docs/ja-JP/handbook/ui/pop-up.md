# ポップアップ

## 概要

ポップアップは、ページ上の小さなウィンドウで、現在のページ内に拡張された内容を表示するために使用されます。ドロワーやダイアログの形式で表示され、特定の注文詳細や商品詳細の表示、データの編集などに利用されます。ポップアップ操作はNocoBaseインターフェースの設定において非常に重要な役割を果たします。多くのブロックが様々なポップアップ操作を提供し、データの追加、表示、編集などに使われます。また、様々なシーンやニーズに適応するために、独自のポップアップ操作をカスタマイズすることも可能です。

## タイプとサイズ

> v1.3.0-alpha以上のバージョンでは、[ページ](/handbook/ui/pop-up#ページ)として開くことがサポートされています。

ポップアップにはドロワーとダイアログの2種類があり、ポップアップを開く際にそのタイプとサイズを設定することができます。

<video width="100%" height="440" controls>
 <source src="https://static-docs.nocobase.com/z-2024-06-13-09.43.42-2024-06-13-09-44-18.mp4">
</video>

### ドロワー

![2024-06-13_09-45-33-2024-06-13-09-46-11](https://static-docs.nocobase.com/2024-06-13_09-45-33-2024-06-13-09-46-11.png)

### ダイアログ

![2024-06-13_09-45-56-2024-06-13-09-46-20](https://static-docs.nocobase.com/2024-06-13_09-45-56-2024-06-13-09-46-20.png)

### ページ

:::info{title=ヒント}
必要なNocoBaseのバージョンはv1.3.0-alpha以上です。
:::

![20240809170648](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240809170648.png)

## 使用シーン

現在のポップアップの主な使用シーンは以下の通りです：

- **ブロックのポップアップ操作**：ブロックのデータを追加、表示、編集するために使用できます。
- **関係データのポップアップ操作**：関係データの拡張情報を表示および編集するために使用できます。

### ブロックのポップアップ操作

![20240511141127](https://static-docs.nocobase.com/20240511141127.png)

### 関係データのポップアップ操作

![20240511141247](https://static-docs.nocobase.com/20240511141247.png)

### 外部共有の単一レコードデータ

:::info{title=ヒント}
NocoBaseのバージョンはv1.3.0-alpha以上が必要です。
:::

他の人と単一レコードのデータを共有したい場合は、ポップアップを開いた後、ブラウザのアドレスバーのURLを直接コピーし、他の人に共有してください。共有されたURLを他の人が開くと、対応するポップアップが自動的に表示されます。

![20240809173339_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240809173339_rec_.gif)

## ブロックの追加

ポップアップ内のブロック追加機能は、現在以下のタイプのブロックを追加するために使用できます。

![20240511141349](https://static-docs.nocobase.com/20240511141349.png)

ポップアップ内のデータは三つの次元に分かれています：

- 現在のレコード：現在のレコードを表示するために使用します。
- 関係レコード：現在のレコードに関連する関係データを表示するために使用します。
- その他のレコード：他のテーブルのデータを表示するために使用します。

![20240511141442](https://static-docs.nocobase.com/20240511141442.png)

### 現在のレコード

例：現在の注文データを表示します。

![20240511141809](https://static-docs.nocobase.com/20240511141809.gif)

### 関係レコード

例：現在の注文に関連する商品データを表示します。

![20240511143040](https://static-docs.nocobase.com/20240511143040.gif)

### その他のレコード

例：注文テーブルのポップアップ操作で倉庫詳細ブロックを設定します。

![20240511143415](https://static-docs.nocobase.com/20240511143415.gif)

## 変数の使用

- 行操作のポップアップ：各ポップアップには「現在のポップアップレコード」変数が含まれており、現在の行レコードを示します。
- 関係フィールドのポップアップ：各ポップアップには「現在のポップアップレコード」変数が含まれており、現在クリックされた関係レコードを示します。

ポップアップ内のブロックは「現在のポップアップレコード」変数を使用でき、関連する使用シーンは以下の通りです：

- ブロックのデータ範囲の設定
- 関係フィールドのデータ範囲の設定
- フィールドのデフォルト値の設定（新規データのフォーム）
- 操作の連動ルールの設定
- フォーム送信操作におけるフィールドの値設定の構成

詳細は[変数](/handbook/ui/variables)を参照してください。
