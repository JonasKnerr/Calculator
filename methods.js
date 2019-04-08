/**
 * Methods for HTML calculator
 * @author Jonas Knerr
 */

var value = "";
/**
 * Pushes number or operator into the input field
 * @param element number or operator
 */
function push(element) {
  value += element;
  var result = document.getElementById("result");
  result.value = value;
}

/**
 * Solves the equation using the JavaScript eval function and pushes it
 * into the input field
 */
function solve() {
  try {
    var result = document.getElementById("result");
    var solution = eval(value);
    value = "";
  } catch (e) {
    if (e instanceof SyntaxError) alert(value + " ist kein richtiger Mathematischer ausdruck");
  }
  if (solution === undefined) {
  } else if (solution === Infinity) {
    alert(
      "Stell dir vor, du hast Null Kekse und verteilst die gleichmäßig auf null Freunde. Wie viele Kekse bekommt jeder? Siehst du, das macht keinen Sinn. Und das Krümelmonster ist traurig, weil es keine Kekse mehr gibt und du bist traurig, weil du keine Freunde hast."
    );
  } else {
    result.value = solution;
  }
}

/**
 * Cleares the input field
 */
function removeAll() {
  value = "";
  var result = document.getElementById("result");
  result.value = "";
}

/**
 *Removes last element from the input field
 */
function removeOne() {
  value = value.slice(0, -1);
  var result = document.getElementById("result");
  result.value = value;
}

/**
 * Changes the value if someone types into the input field
 */
function change() {
  var result = document.getElementById("result");
  value = result.value;
}
