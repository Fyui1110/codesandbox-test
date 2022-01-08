/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "佐藤"];

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

// 田中以外の名前に"さん"を付ける
const newNameArr = nameArr.map((name) => {
  if (name === "田中") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
