//要素数を求める
const arr1 = ['a','i','u'];
console.log(arr1.length);

//要素数と初期値を指定して配列を作成
let arr2 = Array(5).fill(0);
console.log(arr2);

//末尾に要素を追加
var arr3 = ['a','i','u','e','o'];
arr3.push('ka');
console.log(arr3);

//末尾の要素を削除
var poped = arr3.pop();
console.log(arr3);
console.log(poped);

//指定したindexに対して要素の追加
let sports = ['baseball','soccer','basketball'];
sports.splice(2,0,'volleyball');

//置き換え
sports.splice(0,1,'Tennis');

//削除
sports.splice(0,1);

//最大値、最小値を求める
let arr4 = [1,3,5,78,2];

const maxNum =  Math.max(...arr4);
console.log(maxNum);

const MinNum = Math.min(...arr4);
console.log(MinNum);


//ここから重要！

//検索するfind
// indexの小さい方から順に要素を検索。条件に該当する要素があれば返す
// 最初に条件に該当した要素のみを返すので、この例では9が返され、8は返されないことに注意

const arr5 = [3,9,5,4,8]
const target1 =  arr5.find(s => s > 7);
console.log(target1);

//この場合は条件に該当する数字がないので、undefinedになる
const arr6 = [3,9,5,4,8]
const target2 = arr6.find(s => s > 10);
console.log(target2);

//配列から条件を満たす要素のみ抽出し、新しい配列を作成 (filter)
const namearr = ['tarou','yuki','kei','kou','teturou'];
const NewnameArr =   namearr.filter(str => str.length < 5);
console.log(NewnameArr);

//条件に当てはまらなければ、空の配列が返される
const namearr2 = ['yoshitaka','masuda','takashaki','yumemaru','ryousuke'];
const NewnameArr2 = namearr2.filter(str => str.length < 5);
console.log(NewnameArr2);


//ソート
//文字列のソート
const alphabet = ['egg','item','zoo','qita'];
const alphabetSort = alphabet.sort();
console.log(alphabetSort);
//ひらがなのソート
const hiragana = ['こけし','まんじゅう','こんにちは','おはよう'];
const hiraganaSort =  hiragana.sort();
console.log(hiraganaSort);

//数字のソート　　基本アロー関数
const number = [8,33,22,17,15];
const numberSort = number.sort((a,b) => a - b);
console.log(numberSort);

//降順
const numberSortDown =  number.sort((a,b) => b - a);
console.log(numberSortDown);


//値が配列に含まれているか調べる
// 1  (indexOf)
//値が配列に含まれるいる場合は そのindexを返す
var arr7 = ['a','i','u','e','o'];
const result = arr7.indexOf('u');
console.log(result);  //2

//含まれないときは、-1を返す
const  result2 = arr7.indexOf('ka');
console.log('ka');

// 2  (includes)
//値が配列に含まれるいる場合は そのtrueを返す
const result3 = arr7.includes('i');
console.log(result3);

//含まれないときは、falseを返す
const result4 = arr7.includes('ka');
console.log(result4);


//配列内の要素を結合して文字列にする

//スペースを開けずに結合したいとき
var arr8 = ['a','i','u','e','o'];
var newArr = arr8.join("");
console.log(newArr); // >> aiueo

//1スペース開けて結合したいとき
var arr9 = ['a','i','u','e','o'];
var newArr2 = arr9.join(" ");
console.log(newArr2);

//  '+'記号で結合したい時
var arr10 = [1,2,3,4,5];
var newArr3 = arr10.join("+");
console.log(newArr3);