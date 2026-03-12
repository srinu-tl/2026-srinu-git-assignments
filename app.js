// calculator-app/app.js - MODULE 1
function calculate(num1, num2, operation) {
 console.log(`Calculating ${num1} ${operation} ${num2}`);
 if (opeation ==="exp" ){
  return num1**num2;
 }
 if (operation === "add"|| operation =="addition") {
 return num1 + num2; // Implement this
 }
 if (operation === "divide") {
 return num1 * num2; // Implement this
 }
 if (operation === "multiply") {
 // Your logic
 return num1*num2;
}
 
 return "Operation not implemented";

}
console.log(calculate(5, 3, "add")); // Must output: 8

