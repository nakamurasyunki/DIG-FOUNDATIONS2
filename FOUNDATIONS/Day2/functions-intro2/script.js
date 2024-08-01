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
console.log("===== 7 =====");
console.log("(1)");
function square() {
  return 5 * 5;
}

console.log(square());
console.log("(2)");

function square(x) {
  return x * x;
}

console.log(square(3));

console.log("(2)");
function square(number) {
  return number * number;
}

console.log(square(5));

console.log("===== 8 =====");
function cube(x) {
  return x ** 3;
}

console.log(cube(3));

console.log("===== 中級演習 =====");
console.log("===== 1 =====");
function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);

console.log("===== 2 =====");
function createGreeting(phrase, friend) {
  return phrase + ", " + friend + "!";
}

// ここにコードを書いてください。
const morningGreeting = createGreeting("Good morning","Mike");
const dayGreeting = createGreeting("Hello","Bob");
const eveningGreeting = createGreeting("Good evening","Alex");

console.log(morningGreeting); // "Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Bob!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

console.log("===== 3 =====");
const squareArea = s => s*s;
const squarePerimeter = (s) => s * 4;

const rectangleArea = (i,w) => i * w;
const rectanglePerimeter = (i,w) => (i * 2) + (w * 2);

const parallelogramArea = (i,h) => i * h;
const parallelogramPerimeter = (i,w) => (i * 2) + (w * 2);


