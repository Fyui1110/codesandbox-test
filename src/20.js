/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// 変数に関数を入れる方法
const func1 = function (str) {
  return str;
};
console.log(func1("test"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("アロー関数"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(2, 4));
