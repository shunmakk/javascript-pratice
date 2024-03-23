//コーディングテスト中のデータ構造
//paiza ioを実行環境とする


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