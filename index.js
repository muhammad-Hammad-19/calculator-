let cal = (main) => {
  document.getElementById("inp").value += main;
};
let plusfunc = () => {
  let a = document.getElementById("inp");
  a.value = eval(a.value);
};
function clr() {
  document.getElementById("inp").value = "";
}
function deleteLastTwo() {
  let a = document.getElementById("inp");
  let currentInput = a.value;
  if (currentInput.length > 1) {
      a.value = currentInput.slice(0, -1);
  } else {
      a.value = ""; 
  }
}