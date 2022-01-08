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

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// arr4のコピーとしてarr6を作成
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// arr4とarr5を結合してarr7を作成
const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * =を使ってコピーする
 * const arr8 = arr4;
 * console.log(arr8);
 * arr8の値を変更した場合、コピー元のarr4も変更される
 * arr8[0] = 100;
 */
