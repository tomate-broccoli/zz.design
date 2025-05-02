## 設計書

### 1. 目的

このコードは、ドメインイベントを表現し、それに関連するアクション、ポリシー、アクター、集約を管理するためのJavaScriptライブラリを提供します。イベントストーミングの結果をコードで表現し、可視化することを目的としています。

### 2. 機能概要

*   ドメインイベントの作成: `domainEvent`関数を使用して、新しいドメインイベントを作成します。
*   ノートの追加: 各要素（ドメインイベント、アクション、ポリシー、アクター、集約）にノート（コメント）を追加します。
*   保留マーク: ドメインイベントに保留マークを設定し、粒度が適切でないイベントを識別します。
*   関連要素の管理: ドメインイベントに関連するアクション、ポリシー、アクター、集約を管理します。
*   表形式での表示: ドメインイベントとその関連情報をHTMLテーブル形式で表示します。

### 3. 関数リファレンス

#### 3.1. `domainEvent(eventName)`

*   説明: 新しいドメインイベントを作成します。
*   引数:
    *   `eventName` (string): ドメインイベントの名前。
*   戻り値:
    *   `event` (object): ドメインイベントオブジェクト。以下のメソッドを持ちます。
        *   `note(comment)`: ノートを追加します。
        *   `markPending()`: 保留マークを設定します。
        *   `action(actionName)`: アクションを追加します。
        *   `policy(policyName)`: ポリシーを追加します。
        *   `actor(actorName)`: アクターを追加します。
        *   `aggregation(aggregationName)`: 集約を追加します。
        *   `displayTable()`: HTMLテーブル形式で表示します。

#### 3.2. `event.note(comment)`

*   説明: ドメインイベントにノートを追加します。
*   引数:
    *   `comment` (string): ノートの内容。
*   戻り値:
    *   `event` (object): ドメインイベントオブジェクト。

#### 3.3. `event.markPending()`

*   説明: ドメインイベントに保留マークを設定します。
*   戻り値:
    *   `event` (object): ドメインイベントオブジェクト。

#### 3.4. `event.action(actionName)`

*   説明: ドメインイベントにアクションを追加します。
*   引数:
    *   `actionName` (string): アクションの名前。
*   戻り値:
    *   `action` (object): アクションオブジェクト。`note(comment)`メソッドを持ちます。

#### 3.5. `event.policy(policyName)`

*   説明: ドメインイベントにポリシーを追加します。
*   引数:
    *   `policyName` (string): ポリシーの名前。
*   戻り値:
    *   `policy` (object): ポリシーオブジェクト。`note(comment)`メソッドを持ちます。

#### 3.6. `event.actor(actorName)`

*   説明: ドメインイベントにアクターを追加します。
*   引数:
    *   `actorName` (string): アクターの名前。
*   戻り値:
    *   `actor` (object): アクターオブジェクト。`note(comment)`メソッドを持ちます。

#### 3.7. `event.aggregation(aggregationName)`

*   説明: ドメインイベントに集約を追加します。
*   引数:
    *   `aggregationName` (string): 集約の名前。
*   戻り値:
    *   `aggregation` (object): 集約オブジェクト。`note(comment)`メソッドを持ちます。

#### 3.8. `event.displayTable()`

*   説明: ドメインイベントとその関連情報をHTMLテーブル形式で表示します。
*   戻り値:
    *   `html` (string): HTMLテーブルの文字列。

### 4. データ構造

*   ドメインイベント (event):
    *   `eventName` (string): ドメインイベントの名前。
    *   `notes` (array): ノートの配列。
    *   `actions` (array): アクションの配列。
    *   `policies` (array): ポリシーの配列。
    *   `actors` (array): アクターの配列。
    *   `aggregations` (array): 集約の配列。
    *   `isPending` (boolean): 保留マークの状態。

*   アクション (action), ポリシー (policy), アクター (actor), 集約 (aggregation):
    *   `name` (string): 名前。
    *   `notes` (array): ノートの配列。

### 5. 使用例

```javascript
const domainEvent = require('./hoge.js');

const event = domainEvent('商品が注文された')
    .note('ドメインイベントに対するコメント')
    .action('商品を注文する')
        .note('アクションに対するコメント')
    .actor('顧客')
        .note('アクタに対するコメント')
    .aggregation('注文')
        .note('集約に対するコメント');

console.log(event.displayTable());