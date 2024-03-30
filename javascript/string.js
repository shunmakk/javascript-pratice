//文字列

//文字列を反転する   reverse

 var str = "よく聞くよ"
 var newStr = str.split("").reverse().join("");
 console.log(newStr);

//ある文字列が含まれるか調べる (match)
var txt = "Now nothing ever last forever, no";
var target = /last/g ;
var result = txt.match(target);
var newresult = result.join('');
console.log(newresult);

//含まれない場合は、nullが返される
var target = /like/g ;
var  result = txt.match(target);
console.log(result);


//文字列を大文字に変換 (toUpperCase)
var str = "abc";
var strUpper = str.toUpperCase();
console.log(strUpper);

//文字列を小文字に変換 (toLowerCase)
var str = "ABC";
var strLower = str.toLowerCase();
console.log(strLower);

//最初の1文字だけ大文字に変換
var str = "tokyo";
var newStr = str.slice(0,1).toLocaleUpperCase() + str.slice( 1 );
console.log(newStr);


//指定した文字列を置き換え　(replace)
var str = "福田周平宗佑磨中川圭太茶野篤政"
var newStr = str.replace(/福田周平/g, "太田涼");
console.log(newStr);

//削除する場合
var str = "太田涼宗佑磨中川圭太茶野篤政"
var newStr = str.replace(/太田涼/g, "");
console.log(newStr);

//indexで指定した範囲の文字列を取得  (slice)

var str = "オリックスバファローズ";

//indexの開始位置(0)と終了位置(3)を指定しているが、実際取得されるのは終了位置手前の(0~2)である
var n1 = str.slice(0 , 3);
console.log(n1);

var n2 = str.slice(3,6);
console.log(n2); // << クスバ

//index6番目以降の文字を取得
var n3 = str.slice(6);
console.log(n3);

//末尾から 3文字取得　　最後尾を-1とする
var n4 = str.slice( -3);
console.log(n4);

//文字の登場回数をカウントする
// text内での"ab"の登場回数を調べる
var text = "abc-acb-bac-bca-cab-cba";
var target = /ab/g;
var count =( text.match(target) || []).length;
console.log(count);

//文字列を計算式として扱う
var str = "1*2*3*4*5";
result = Function('return ('+str+');')();

console.log(result);

//文字列を分割して配列にする (split)

// カンマで分割する
var str = "yosida,yamaoka,yamamoto,yamasita"
var arr = str.split(",");
console.log(arr);

//スペースで分割する
var str ="yosida,yamaoka,yamamoto,yamasita"
var arr = str.split(" ");
console.log(arr);

//文字を１つずつ分割する
var str = "yamamotoyoshinobu"
var arr = str.split("");
console.log(arr);

//型変換　　数値→文字列
var number = 234;
var numToStr = String(number);
console.log(typeof(numToStr));

//boolean → 文字列
var boolean = false;
var boolToStr = String(boolean);

console.log(typeof(boolean));
console.log(typeof(boolToStr));