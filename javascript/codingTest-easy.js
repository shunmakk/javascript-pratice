//コーディングテストに出てきそうな文法　基礎

// for文

const arr = ['オリックス','ソフトバンク','楽天'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//for~of 文

const arr2 = ['阪神','ヤクルト','巨人'];

for(const elem of arr2){
    console.log(elem);
}


//while

let i = 0;

while(i <= 3){
    console.log(i);
    i++
}


//swicth文
const Team = "オリックス";

switch(Team){
    case "オリックス":
    console.log('あなたはオリックスファンです')
    break;
    default:
    console.log('他球団のファンですね')
}


//余りとべき乗
console.log(10 % 3);
console.log(2 ** 4);  // >> 16

//切り上げ
var num = Math.ceil( 2.4 );
console.log(num);  // >> 3

//切り捨て
var num = Math.floor(2.8);
console.log(num);  // >> 2

//四捨五入
var num = Math.round(1.5);
console.log(num);  // >> 2

var num = Math.round(1.4);
console.log(num);  // >> 1

//整数の桁数
//文字列にしてから長さを求める
var num = 12345;
var numLength = num.toString().length;
console.log(numLength);  // >> 5