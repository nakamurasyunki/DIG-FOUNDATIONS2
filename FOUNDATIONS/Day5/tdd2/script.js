'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

console.log("===== 基礎演習 =====");
console.log("===== 1 =====");

/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

actual = getFullName("Ken", "Watanabe");
expected = "Ken Watanabe";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("===== 2 =====");

/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありなら true、無しなら false）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
 */
function simpleGreeting(name, isFormal) {
  // ここにコードを書きましょう
  let result;
  if (isFormal) {
    result = "Hello, " + name + "-san.";
  } else {
    result = "Hello, " + name + ".";
  }
  return result;
}

actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("===== 3 =====");

/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
 */
// 関数を宣言しましょう
const isGreaterThan = (num1,num2) => num1 > num2;

actual = isGreaterThan(5, 4);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isGreaterThan(3, 4);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}