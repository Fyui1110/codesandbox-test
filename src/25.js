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

// 関数のreturnで三項演算子を使う
// 2つの数値の合計が100を超えるかチェックする
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "100以下です";
};
console.log(checkSum(50, 20));
console.log(checkSum(50, 60));
