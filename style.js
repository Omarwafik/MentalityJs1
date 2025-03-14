var result = document.getElementById("result");
var input1 = document.getElementById("inp1");
var input2 = document.getElementById("inp2");

function displayAdd() {
  var res1 = Number(input1.value);
  var res2 = Number(input2.value);
  result.innerHTML = res1 + res2;
  input1.value = null;
  input2.value = null;
}
function displaySubtract() {
  var res1 = Number(input1.value);
  var res2 = Number(input2.value);
  result.innerHTML = res1 - res2;
  input1.value = null;
  input2.value = null;
}
function displayMiltiply() {
  var res1 = Number(input1.value);
  var res2 = Number(input2.value);
  result.innerHTML = res1 * res2;
  input1.value = null;
  input2.value = null;
}
function displayDivision() {
  var res1 = Number(input1.value);
  var res2 = Number(input2.value);
  result.innerHTML = res1 / res2;
  input1.value = null;
  input2.value = null;
}
function displayAverage() {
  var res1 = Number(input1.value);
  var res2 = Number(input2.value);
  result.innerHTML = (res1 + res2) / 2;
  input1.value = null;
  input2.value = null;
}
