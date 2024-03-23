//コーディングテスト中のデータ構造
//paiza ioもしくはデペロッパーツールを実行環境とする
// gptに聞きながら


//ハッシュテーブル　→データの格納
//1 配列arrry
const arrry = [1, 2, 3];
console.log(arrry); //[1,2,3]

//集合セット
const set = new Set([1,2,3]);
console.log(set); // {1,2,3}

//写像Map
const map = new Map([
    ['name', 'yosida'],
    ['title', 'orix']
]);
console.log(map); // { 'name' => 'yosida', 'title' => 'orix' }


//スタック　→データを一時的に格納するためのデータ構造の一種　最後に追加された要素が最初に取り出される
function Stack(){
    //スタック
    this.items = [1,2,3];
    //追加 push
    Stack.prototype.push = function(element){
        this.items.push(element);
    }
    //削除 pop
    Stack.prototype.pop = function(){
       return this.items.pop();
    }

    //取得　peek
    Stack.prototype.peek = function(){
        return this.items[this.items.length-1]
    }
}
 //実践してみた
 const stack = new Stack();
 stack.push(4);
 console.log(stack);
 stack.pop();
 console.log(stack);


//キュー　→データを一時的に格納するためのデータ構造の一種　最初に追加された要素が最初に取り出される
function Queue(){
    //キュー
    this.dataStore = [1,2,3];
    //追加 push
    Queue.prototype.enqueue = function(element){
        this.dataStore.push(element);
    }
    //削除　shift
    Queue.prototype.dequeue = function(){
        this.dataStore.shift();
    }
    //取得
    Queue.prototype.theFront = function(){
        return this.dataStore[0];
    }
}

//実践してみた
const queue = new Queue();
queue.enqueue(4); 
console.log(queue.dataStore);
queue.dequeue();
console.log(queue.dataStore);

//連結リスト
//→データ要素をノードと呼ばれる　オブジェクトで連結したデータ構造。挿入や削除などの操作がリストの先頭や任意の位置で効率的に行える。要素を直接アクセスするためには、リストの先頭から順番に要素をたどる必要がある

//連結リストのノードを表すコンストラクタ関数
function ListNode(val,next){
    this.val = val === undefined ? 0 : val; //値
    this.next = next === undefined ? null : next; //次のノードへの参照
}

//配列から連結リストを構築する関数
const makeList = (protoArr) => {
    let list = new ListNode(protoArr[0]);
    let pre = list;
    for(let i = 1; i < protoArr.length; i++){
        pre.next = new ListNode(protoArr[i]);
        pre = pre.next;
    }
    return list;
}

//連結リストから特定の値を取り除く関数
const removeValue = (head,value) => {
    //先頭のノードが目的の値と一致する場合
    while(head && head.val === value){
        head = head.next
    } 
    //先頭以外のノードを精査
    let current = head;
    while(current && current.next){
        if(current.next.val === value){
        // 目的の値を持つ次のノードをスキップ
        current.next = current.next.next;
        } else{
            //目的の値ではない場合、次のノードに進む
            current = current.next;     
        }
        return head;
    }
}

//新しい値を追加する
const addValue = (head,value) => {
    const newNode = new ListNode(value); //新しいノードを作成

    if(!head){
        return newNode; //リストが空の場合、新しいノードを先頭に設定
    }

    let current = head;
    while(current.next){
        current = current.next //リストの末尾まで移動
    }

    current.next = newNode;  //新しいノードをリストに追加
    return head;
}


//連結リストの表示
const printList = (head) => {
    let current = head;
    while(current){
        console.log(current.val);
        current = current.next;
    }
}


//使用例　配列から連結リストを構築
const List = makeList([1,2,3,4,5,6]);
console.log(List); //1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
printList(List);
removeValue(List , 2);
console.log(List);
printList(List);
addValue(List, 55);
console.log(List);
printList(List);



//木探索
