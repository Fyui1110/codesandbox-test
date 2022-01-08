/**
 *
 * テンプレート文字列
 */
const name = "ゆい";
const age = "27";

// 「私の名前はゆいです。年齢は27歳です。」
//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いる方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
