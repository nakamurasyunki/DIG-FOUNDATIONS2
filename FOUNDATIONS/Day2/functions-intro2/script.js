'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 2024/7/31
console.log("===== 基礎演習 =====");
console.log("===== 1 =====");
function add(numOne, numTwo) {
  return numOne + numTwo;
}

// テスト
console.log(add(4, 3)); // => 7 を表示
console.log(add(100, 42)); // => 142 を表示

console.log("===== 2 =====");
console.log(add(100)); // 何が起こる？
console.log(add(1, 4, 5)); // 何が起こる？

console.log("===== 3 =====");
function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log("simpleFunctionA: ", simpleFunctionA());
console.log("simpleFunctionB: ", simpleFunctionB());

console.log("===== 4 =====");
function subtract(num1, num2) {
  // ここにコードを書いてください
  return num1 - num2;
}

console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58

console.log("===== 5 =====");
// ここにコードを書いてください
const greeting = (name) => "Hello, " + name + "!";

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Bob")); // => "Hello, Bob!"

console.log("===== 6 =====");
const average = (num1,num2) => (num1 + num2) / 2;

console.log(average(10,5));

// 2024/8/1