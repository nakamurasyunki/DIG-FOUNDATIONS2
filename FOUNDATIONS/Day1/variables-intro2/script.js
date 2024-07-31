'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 2024/7/31
console.log("===== 基礎演習 =====");
console.log("===== 1 =====");
// 例
console.log("===== 例 =====");
const school = "DIG college";
console.log(school); // "DIG college" を表示
let week = 1;
console.log(week); // "1" を表示

// ここにあなたのコードを書いてください
console.log("==========");
const name = "Shunki Nakamura";
let age = 27;
let isProgrammer = true;
let currentTask = 1;

console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示

console.log("===== 2 =====");
currentTask = 2;
console.log(currentTask);

console.log("===== 3 =====");
// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
let squareArea = squareSideLength * 2;

console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
let rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
let triangleArea = (triangleBaseLength * triangleHeightLength) / 2

console.log(triangleArea); // "10" を表示

// 2024/7/31
console.log("===== 中級演習 =====");
console.log("===== 1 =====");
const circleDiameter = 10;
// ここにあなたのコードを書いてください
const pi = 3.141592;
let circleCircumference = circleDiameter * pi;
let circleRadius = circleDiameter / 2;
let circleArea = circleRadius * circleRadius * pi;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

console.log("===== 2 =====");
let a = "B";
let b = "A";
// ここにあなたのコードを書いてください
let c = a;
a = b;
b = c;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

console.log("===== 3 =====");
let value = 1;

console.log(value); // "1" を表示

// value に何かを行う
value += value;

console.log(value); // "2" を表示

// value に何かを行う
value += value;

console.log(value); // "4" を表示

// value に何かを行う
value += value;

console.log(value); // "8" を表示

// value に何かを行う
value += value;

console.log(value); // "16" を表示

// value に何かを行う
value += value;

console.log(value); // "32" を表示

// value に何かを行う
value += value;

console.log(value); // "64" を表示

console.log("===== 4 =====");
const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";
let result = "Hello my name is " + firstName + " " + lastName + ". I live in " + city + ".";

console.log(result); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

// 2024/7/31
console.log("===== 応用演習 =====");
console.log("===== 1 =====");
// アドバイス： ここで何かする必要があるかもしれません
let count = 0;

function counter() {
  count ++;
  return count;
}

console.log(counter()); // => 1
console.log(counter()); // => 2
console.log(counter()); // => 3
// etc.

console.log("===== 2 =====");
function isOdd(givenNumber) {
  // ここにあなたのコードを書いてください
  // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
  if (givenNumber % 2 === 1) {
    return "Yes, it's odd"
  } else {
    return "No, it's even"
  }
}

console.log(isOdd(1));//odd
console.log(isOdd(2));//even