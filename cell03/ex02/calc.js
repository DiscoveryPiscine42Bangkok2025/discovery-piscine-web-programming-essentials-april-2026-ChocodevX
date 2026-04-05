
const fnumx = document.getElementById("fname").value;
const lnumx = document.getElementById("lname").value;
function caculate() {
    const fnumx = parseFloat(document.getElementById("fname").value);
    const lnumx = parseFloat(document.getElementById("lname").value);
    const operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "+":
            result = fnumx + lnumx;
            break;
        case "-":
            result = fnumx - lnumx;
            break;
        case "*":
            result = fnumx * lnumx;
            break;
        case "/":
            if (lnumx === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = fnumx / lnumx;
            break;
        case "%":
            result = fnumx % lnumx;
            break;
        default:
            alert("Invalid operator");
            return;
    }

    alert("Result: " + result);
}

console.log(fnum);