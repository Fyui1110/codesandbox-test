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

// 配列の定義
const myProfile = ["ゆい", "27"];
const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

// 配列から取り出す
const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
