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