/**
 * const、let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数上書き";
console.log(val2);

// let変数は再宣言不可能
// let val2 = "let変数の再宣言";

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
// val3 = "const変数上書き";

// const変数は再宣言不可能
// const val3 = "const変数の再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "ゆい",
  age: "27"
};
val4.name = "yui";
val4.address = "wakayama";
console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
// dogをbirdに変更
val5[0] = "bird";
// pushで値を追加出来る
val5.push("monkey");
console.log(val5);
