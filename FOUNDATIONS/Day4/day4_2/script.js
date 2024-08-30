'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("===== ウォーミングアップ =====");
console.log("===== 1 =====");
function isMultipleOfThree(num) {
  // ここにあなたのコードを書いてください
  return num % 3 === 0;
}

// テスト
console.log(isMultipleOfThree(6)); // => true
console.log(isMultipleOfThree(10)); // => false

console.log("===== 2 =====");
function isMultipleOf(num1,num2) {
  // ここにあなたのコードを書いてください
  return Number.isInteger(num1 / num2);
}

// テスト
console.log(isMultipleOf(6, 3)); // => true
console.log(isMultipleOf(10, 4)); // => false

console.log("===== 基礎演習 =====");
console.log("===== 1 =====");
function simplePasswordLock(password) {
  if (password === "password") {
    return "パスワードが合いました。ようこそ！";
  }
  return "パスワードが違います。もう一度入力してください。";
}

console.log(simplePasswordLock("qwerty")); // => "パスワードが違います。もう一度入力してください。" と表示されるようにする。
console.log(simplePasswordLock("password")); // => "パスワードが合いました。ようこそ！" と表示されるようにする。

console.log("===== 2 =====");
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

console.log("===== 3 =====");
const isItToolLong = str => {
  if (str.length > 10) {
    return true;
  } else {
    return false;
  }
};

console.log(isItToolLong("12345678910")) // true
console.log(isItToolLong("123456")) // false

console.log("===== 4 =====");
function biggerNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    return 'The first argument is bigger.';
  } else if (numOne < numTwo) {
    return 'The second argument is bigger.';
  } else {
    return 'The arguments is Equal.';
  }
}

console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.' と表示されるようにする。
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.' と表示されるようにする。
console.log(biggerNumber(4, 4)); // => ''The arguments is Equal.' と表示されるようにする。

console.log("===== 5 =====");
function printDataType(data) {
  if (typeof data === "number") {
    console.log("This is a number.");
  } else if (typeof data === "string") {
    console.log("This is a string.")
  } else if (typeof data === "boolean") {
    console.log("This is boolean.")
  } else if (typeof data === "undefined") {
    console.log("This is not a string, boolean, or number.")
  }
  // ここにあなたのコードを書いてください
}

printDataType(42); // => "This is a number." が表示されるようにする。
printDataType("Hello!"); // => "This is a string." が表示されるようにする。
printDataType(true); // => "This is a boolean." が表示されるようにする。
printDataType(undefined); // => "This is not a string, boolean, or number." が表示されるようにする。

console.log("===== 6 =====");

function greeting(name,greet) {
  let result;
  if (greet === "Japanese") {
    result = "Konnichiwa, " + name + "!";
  } else if (greet === "English") {
    result = "Hello, " + name + "!";
  } else if (greet === "German") {
    result = "Gutentag, " + name + "!";
  } else if (greet === "Spanish") {
    result = "Hola, " + name + "!";
  }
  return result;
}

console.log(greeting("Harry Potter", "Japanese")); // => "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!" が表示されるようにする。

console.log("===== 7 =====");

function isEven(num) {
  let result;
  if (typeof(num) === "number") {
    result = num % 2 === 0;
  } else {
    result = "This is not a number.";
  }
  return result;
}

console.log(isEven(4)); // => true が表示されるようにする。
console.log(isEven(7)); // => false が表示されるようにする。
console.log(isEven("7")); // => else が表示されるようにする。

console.log("===== 中級演習 =====");
console.log("===== 1 =====");

const isOdd = num => num % 2 === 1;

console.log(isOdd(7)); // => true が表示されるようにする。
console.log(isOdd(4)); // => false が表示されるようにする。

console.log("===== 2 =====");

const isPositive = num => num > 0;

console.log(isPositive(7)); // => true が表示されるようにする。
console.log(isPositive(-2)); // => false が表示されるようにする。

console.log("===== 3 =====");

const isNegative = num => num < 0;

console.log(isNegative(-7)); // => true が表示されるようにする。
console.log(isNegative(3)); // => false が表示されるようにする。

console.log("===== 4 =====");

const isZero = num => num === 0;

console.log(isZero(0)); // => true が表示されるようにする。
console.log(isZero(3)); // => false が表示されるようにする。

console.log("===== 5 =====");

const randomNumber = num => Math.random() * num;

console.log(randomNumber(5));

console.log("===== 6 =====");

const guessMyNumber = num => {
  let result;
  if (num === Math.floor(Math.random() * (5+1))) {
    result = "YES!";
  } else {
    result = "NO!";
  }
  return result;
}

console.log(guessMyNumber(3));

console.log("===== 応用演習 =====");
console.log("===== 1 =====");

const randomStopLight = () => {
  let result;
  const number = Math.floor(Math.random() * (10 + 1));
  console.log("Number:",number);
  if (number < 3) {
    result = "🔴Red";
  } else if (3 <= number && number <= 6) {
    result = "🟡Yellow";
  } else if (6 < number) {
    result = "🟢Green";
  }
  return result;
};

console.log(randomStopLight());