// document.getElementById("caseAdd").addEventListener("click", function () {
//   const caseinput = document.getElementById("caseinputcount");
//   const caseCount = parseInt(caseinput.value);
//   const caseNewCount = caseCount + 1;
//   caseinput.value = caseNewCount;
//   const casetotalPrice = caseNewCount * 59;
//   document.getElementById("caseTotal").innerText = "$" + casetotalPrice;
// });

// // case ----
// document.getElementById("caseMinus").addEventListener("click", function () {
//   const caseInputMinus = document.getElementById("caseinputcount");
//   const caseMinusCount = parseInt(caseInputMinus.value);
//   const newMinusCount = caseMinusCount - 1;
//   caseInputMinus.value = newMinusCount;
//   const caseTotalMinusPrice = newMinusCount * 59;
//   document.getElementById("caseTotal").innerText = "$" + caseTotalMinusPrice;
// });

document.getElementById("caseAdd").addEventListener("click", function () {
  handaleProductChange(true);
});

// case ----
document.getElementById("caseMinus").addEventListener("click", function () {
  handaleProductChange(false);
});

function handaleProductChange(incrase) {
  const caseinput = document.getElementById("caseinputcount");
  const caseCount = parseInt(caseinput.value);
  let caseNewCount = caseCount;
  if (incrase == true) {
    caseNewCount = caseCount + 1;
  } else if (incrase == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseinput.value = caseNewCount;
  const casetotalPrice = caseNewCount * 59;
  document.getElementById("caseTotal").innerText = "$" + casetotalPrice;
}

// let dfs = "he"

let bashr = [10, 20, 30];

console.log(typeof bashr);
