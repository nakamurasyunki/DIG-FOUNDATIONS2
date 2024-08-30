'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する。
let expected;
let actual;

console.log("===== 基礎演習 =====");
console.log("===== 1 =====");

/**
 * @param {number} age - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */
function isTeenager(age) {
  // ここにコードを書きましょう.
  let result = false;
  if (typeof(age) !== "number"){
    result = "無効です！与えられた年齢は数字ではありません！";
  } else if (13 <= age && age <= 19) {
    result = true;
  }
  return result;
}

actual = isTeenager(3);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。

console.log("===== 2 =====");

actual = isTeenager("Hello!");
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("===== 3 =====");

/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 名前に"san" を付ける場合は true　何もつけない場合は false
 * @param {boolean} greet - "Hello" なら true　"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶文

 */
// ここにコードを書きましょう.
const anotherGreeting = (name,isFormal,greet) => {
  let result;
  if (typeof(name) === "string" && typeof(isFormal) === "boolean" && typeof(greet) === "boolean") {
    if (greet) {
      if (isFormal) {
        result = "Hello, " + name + "-san.";
      } else {
        result = "Hello, " + name + "!";
      }
    } else {
      if (isFormal) {
        result = "Goodbye, " + name + "-san.";
      } else {
        result = "Goodbye, " + name + "!";
      }
    }
  } else {
    result = "無効な入力値です！";
  }
  return result;
};

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。

console.log("===== 中級演習 =====");
console.log("===== 1 =====");

actual = anotherGreeting(true, false, true);
expected = "無効な入力値です！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効な入力値です！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("===== 2 =====");

/**
 * @param {number} score - 0 以上 100 以下の点数（スコア）
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績（グレード）
 */

const getGrade = score => {
  let result = "F";
  if (0 <= score && score <= 100) {
    if (90 <= score && score <= 100) {
      result = "A";
    } else if (80 <= score && score < 90) {
      result = "B";
    } else if (70 <= score && score < 80) {
      result = "C";
    } else if (60 <= score && score < 70) {
      result = "D";
    }
  } else {
    result = "無効な点数です。";
  }
  return result;
};

actual = getGrade(95);
expected = "A";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(85);
expected = "B";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(75);
expected = "C";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(65);
expected = "D";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(55);
expected = "F";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("===== 3 =====");

actual = getGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("===== 4 =====");

/**
 * @param {"A"|"B"|"C"|"D"|"F"} grade - 成績（グレード）
 * @returns {number} 各成績における最高点（ベストスコア）
 */

const getBestScore = grade => {
  let result = "無効な成績です。";
  if (grade === "A") {
    result = 100;
  } else if (grade === "B") {
    result = 89;
  } else if (grade === "C") {
    result = 79;
  } else if (grade === "D") {
    result = 69;
  } else if (grade === "F") {
    result = 59;
  }
  return result;
};

actual = getBestScore("A");
expected = 100;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore("B");
expected = 89;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore("C");
expected = 79;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore("D");
expected = 69;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore("F");
expected = 59;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("===== 5 =====");

actual = getBestScore("恐竜ってすばらしい");
expected = "無効な成績です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore(100);
expected = "無効な成績です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("===== 応用演習 =====");
console.log("===== 1 =====");
console.log("===== 2 =====");