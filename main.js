// ADDITION
function doAddition() {
    const a = parseFloat(document.getElementById("add1").value);
    const b = parseFloat(document.getElementById("add2").value);
    document.getElementById("addResult").textContent = a + b;
}

// SUBTRACTION
function doSubtraction() {
    const a = parseFloat(document.getElementById("sub1").value);
    const b = parseFloat(document.getElementById("sub2").value);
    document.getElementById("subResult").textContent = a - b;
}

// MULTIPLICATION
function doMultiplication() {
    const a = parseFloat(document.getElementById("mul1").value);
    const b = parseFloat(document.getElementById("mul2").value);
    document.getElementById("mulResult").textContent = a * b;
}

// DIVISION
function doDivision() {
    const a = parseFloat(document.getElementById("div1").value);
    const b = parseFloat(document.getElementById("div2").value);
    if (b === 0) {
        document.getElementById("divResult").textContent = "Cannot divide by 0";
    } else {
        document.getElementById("divResult").textContent = a / b;
    }
}

