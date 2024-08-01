console.log("===== 応用演習 =====");
console.log("===== 1 =====");
console.log("advanced2.js から simpleFunctionA を呼び出しています。: ", simpleFunctionA());

console.log("===== 2 =====");
const upperBound = 7;
function guessMyNumber(n) {
  const number = randomNumber(upperBound);
  if (n > upperBound) {
    return "0 から" + upperBound + "の間の数字を入力してください。";
  } else if (n === number) {
    return "当たりです！";
  }
  return "残念！正解は" + number + "でした。";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

console.log(guessMyNumber(3));