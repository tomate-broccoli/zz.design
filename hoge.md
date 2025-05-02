# 指示書

- 以下の関数を定義してください。
  - domainEvent
  - action
  - policy
  - actor
  - aggregation

- 各関の使用例は以下になります。

```
domainEvent('商品が注文された')
    .note('ドメインイベントに対するコメント)
    .action('商品を注文する')
        .note('アクションに対するコメント)
    .actor('顧客')
        .note('アクタに対するコメント)
    .aggregation('注文')
        .note('集約に対するコメント)
```

各メソッドの順番は任意です。
```
domainEvent('商品が注文された')
    .action('商品を注文する')
        .note('アクションに対するコメント1')
        .note('アクションに対するコメント2')
    .aggregation('注文')
        .note('集約に対するコメント1')
        .note('集約に対するコメント2')
    .actor('顧客')
```

