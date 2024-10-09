# 多対一

図書館データベースには、書籍と著者の2つのエンティティがあります。1人の著者が複数の書籍を書くことができますが、各書籍には通常1人の著者しか存在しません。この場合、著者と書籍の間には多対一の関係があります。複数の書籍が同じ著者に関連付けられますが、各書籍には唯一の著者が存在します。

ER関係は以下の通りです。

![alt text](https://static-docs.nocobase.com/eaeeac974844db05c75cf0deeedf3652.png)

フィールド設定

![alt text](https://static-docs.nocobase.com/3b4484ebb98d82f832f3dbf752bd84c9.png)

## パラメータ説明

### ソースコレクション

ソースコレクション、つまり現在のフィールドが存在するコレクションです。

### ターゲットコレクション

ターゲットコレクション、関連付ける対象のコレクションです。

### 外部キー

ソースコレクション内のフィールドで、2つのコレクション間の関連を確立するために使用されます。

### ターゲットキー

外部キー制約が参照するターゲットコレクション内のフィールドで、ユニークである必要があります。

### ON DELETE

ON DELETEは、親コレクションのレコードを削除する際に、関連する子コレクションの外部キー参照に対する操作ルールを指します。これは外部キー制約を定義する際のオプションです。一般的なON DELETEオプションには以下があります。

- **CASCADE**：親コレクションのレコードを削除すると、自動的に子コレクション内の関連するすべてのレコードが削除されます。
- **SET NULL**：親コレクションのレコードを削除すると、子コレクション内の関連する外部キー値がNULLに設定されます。
- **RESTRICT**：デフォルトのオプションで、親コレクションのレコードを削除しようとすると、関連する子コレクションのレコードが存在する場合に削除を拒否します。
- **NO ACTION**：RESTRICTと似ており、関連する子コレクションのレコードが存在する場合に親コレクションのレコードの削除を拒否します。
