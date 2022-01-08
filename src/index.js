/**
 * const、let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数の再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数上書き";

// // const変数は再宣言不可能
// // const val3 = "const変数の再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ゆい",
//   age: "27"
// };
// val4.name = "yui";
// val4.address = "wakayama";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// dogをbirdに変更
// val5[0] = "bird";
// pushで値を追加出来る
// val5.push("monkey");
// console.log(val5);

/**
 *
 * テンプレート文字列
 */
// const name = "ゆい";
// const age = "27";

// 「私の名前はゆいです。年齢は27歳です。」
// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// 変数に関数を入れる方法
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("test"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("アロー関数"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(2, 4));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ゆい",
//   age: "27"
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// // myProfileからnameとageを取り出す
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["ゆい", "27"];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// (name = "ゲスト")は初期値の設定
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("ゆい");

/**
 * スプレッド構文 ...
 */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// // スプレッド構文で配列を展開
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる(分割代入を使用する)
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // arr4のコピーとしてarr6を作成
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// // arr4とarr5を結合してarr7を作成
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * =を使ってコピーする
 * const arr8 = arr4;
 * console.log(arr8);
 * arr8の値を変更した場合、コピー元のarr4も変更される
 * arr8[0] = 100;
 */

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "佐藤"];

// // for文を使って配列をループして取り出す場合
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // mapを使って取り出す
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// // filterを使って奇数の値を取り出す
// // returnに条件を書く
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// // 田中以外の名前に"さん"を付ける
// const newNameArr = nameArr.map((name) => {
//   if (name === "田中") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件 ? trueの場合の処理 : falseの場合の処理
// const x = 2;
// const y = 1;
// const val1 = x > y ? "xの方が大きいです" : "yの方が大きいです";
// console.log(val1);

// const num = 1000;
// console.log(num.toLocaleString());

// // 数値の場合は金額表示、それ以外はエラーメッセージを表示する
// const formatteNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatteNum);

// // 関数のreturnで三項演算子を使う
// // 2つの数値の合計が100を超えるかチェックする
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "100以下です";
// };
// console.log(checkSum(50, 20));
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1または2はtrueです");
// }

// if (flag1 && flag2) {
//   console.log("1と2はtrueです");
// } else {
//   console.log("1または2はfalseです");
// }

// // ||は左側がfalseとなるときに右側を返す
// const num1 = 100;
// const fee  = num1 || "金額未設定です";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee  = num2 && "num2が設定されました";
// console.log(fee);
