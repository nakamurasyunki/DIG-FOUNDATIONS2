'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("===== 基礎演習 =====");
console.log("===== 1 =====");
"true" == true;
// 上の例では使っていますが、基本的に等価演算子 ( == ) は使わず、必ず厳密等価演算子 ( === ) を使うようにしましょう。
"true" === true;
3 >= 3;
3 !== 4;

console.log("===== 2 =====");
console.log(1100 !== 99); // => true を表示

console.log(1 === 21); // => false を表示

console.log(62 !== 50); // => true を表示

console.log("5" === 5); // => false を表示

console.log("6" !== "six"); // => true を表示

console.log("===== 3 =====");
console.log(2 + 3 * 10 < 50);

console.log("===== 4 =====");
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual("2", 2));

console.log("===== 5 =====");
function isGreaterThan(valueOne, valueTwo) {
  return valueOne > valueTwo;
}

console.log(isGreaterThan(10,1)); // true
console.log(isGreaterThan(1,10)); // false

console.log("===== 6 =====");
const isOfAge = age => {
  if (age >= 20) {
    return "飲酒可能です。";
  } else {
    return "未成年です。";
  }
};

console.log(isOfAge(21)); // true
console.log(isOfAge(19)); // false

console.log("===== 中級演習 =====");
console.log("===== 1 =====");
console.log("===== 2 =====");
// const isEven = num => num % 2 === 0;

// console.log(isEven(2)); // true
// console.log(isEven(1)); // false

console.log("===== 3 =====");
const validCredentials = (username,password) => {
  if (username.length === 7 & password.length === 8) {
    return true;
  } else {
    return false;
  }
};

console.log(validCredentials("1234567","12345678"));
console.log(validCredentials("123","12345678"));
console.log(validCredentials("123","1324"));

console.log("===== 応用演習 =====");
console.log("===== 1 =====");
const isEven = num => Number.isInteger(num / 2);

console.log(isEven(2)); // true
console.log(isEven(1)); // false

console.log("===== 2 =====");
const getGreaterValue = (num1,num2) => Math.max(num1,num2);

console.log(getGreaterValue(10, 15)); // 15 を表示
console.log(getGreaterValue(15, 10)); // 15 を表示

console.log("===== 3 =====");
const getGreatestValue = (...array) => Math.max(...array);

console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示

console.log("===== ナイトメア =====");
console.log("===== 1 =====");
const flatten = numArray => {
  const result = [];
  numArray.forEach(element => {
    if(typeof element === "number") {
      result.push(element);
    } else {
      element.forEach(elem => {
        result.push(elem);
      })
    }
  });
  return result;
};

console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]