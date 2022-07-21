function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

function divide(x, y) {
  return x / y;
}

function diff(x, y) {
  return x - y;
}

function calc(x, y, operator) {
  //converting sympols to opreation names
  if (operator == "+") {
    operator = add;
  } else if (operator == "-") {
    operator = diff;
  } else if (operator == "*") {
    operator = multiply;
  } else if (operator == "/") {
    operator = divide;
  }
/*what will be returned*/
  return operator(x, y);
}
var x = [];
var y = [];
var op;

//taking inputs by mouse
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    if (this.textContent == "+" || this.textContent == "-" || this.textContent == "/" || this.textContent == "*") {
      op = this.textContent;
      x += ".";
      y += ".";
    } else if (this.textContent == "=") {
      x = x.split(".")[0];
      y = y.split(".")[1];
      document.querySelector(".zeroth-row").textContent = Number(x) + "+" + Number(x) + "=" + calc(Number(x), Number(y), op);
      x = [];
      y = [];
    } else {
      y += this.innerHTML;
      x += this.textContent;
    }
  });

}
//taking input by keyboard
document.querySelector("body").addEventListener("keydown", function(event) {
  if (event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*") {
    op = event.key;
    x += ".";
    y += ".";
  } else if (event.key == "=" || event.key == "Enter") {
    x = x.split(".")[0];
    y = y.split(".")[1];
    if (op == undefined) {
        document.querySelector(".zeroth-row").textContent = Number(x) //if the user hit equal without the operators the screen will show the first value
      }else{
    document.querySelector(".zeroth-row").textContent = Number(x) + " " + op + " " + Number(y) + " =" + " " + calc(Number(x), Number(y), op);}
    x = [];
    y = [];
  } else {
    y += event.key;
    x += event.key;
  }
});
