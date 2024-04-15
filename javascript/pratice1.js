//javascript問題集　よしもと芸人もりたけんじさんのもの 

//門１　
// const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください 
// e.g{ a:'a', b:'b' }

const a = {a:'a'};
const b = {b: 'b'};
const c = {...a, ...b};
console.log(c);

//門2
//const arry = ['aa','bb','cc','dd','ee','ff','gg'];のdd,ee,ffを新たな配列として返してください

const arry = ['aa','bb','cc','dd','ee','ff','gg']
const newArr = arry.slice(3,-1)
console.log(newArr);

//門3
//['a','b’] の要素をconsole出力してください e.g 'a'と'b'
const ab = ['a','b'];
ab.forEach(function(elem,i){
    console.log(elem)
})

//門4
// ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
const ab2 = ['a','b'];
ab2.forEach(function(elem,i){
    console.log(elem + i);
})

//門8
//下記の定数objの中のkeyとvalueを自身のプロパティのみ全て出力しなさい
const obj = {
    key: 'aa',
    key2: 'bb'
}

for (key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key, obj[key])
    }
}

//問11
// id番号が若い順にソートしたオブジェクトを含む配列を出力してください

const collection = [
    {id: 1, name: 'yuki'},
    {id:23, name: 'kouji'},
    {id:14, name: 'hide'}
]

collection.sort(function(a,b){
    return a.id -  b.id
})

console.log(collection)


