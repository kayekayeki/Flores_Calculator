let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; 
let firstInput = null; 
let operator = ""; 
let lastButtonClicked = ""; 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            if (firstInput !== null && operator !== "" && string !== "") {
                let secondInput = parseFloat(string);
                let result;
                switch (operator) {
                    case '+':
                        result = firstInput + secondInput;
                        break;
                    case '-':
                        result = firstInput - secondInput;
                        break;
                    case '*':
                        result = firstInput * secondInput;
                        break;
                    case '/':
                        result = firstInput / secondInput;
                        break;
                    case '%':
                        result = firstInput * (secondInput / 100); 
                        break;
                }
                if (!isNaN(result) && result.toString().length > 10) {
                    input.value = "Error";
                } else {
                    input.value = result;
                }
                firstInput = result;
                string = "";
                operator = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            input.value = "";
            string = "";
            firstInput = null;
            operator = "";
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (['+', '-', '*', '/', '%'].includes(e.target.innerHTML)) { 
            operator = e.target.innerHTML;
            if (string !== "") {
                firstInput = parseFloat(string);
            }
            string = "";
        } else if (e.target.innerHTML === '.') {
            if (!string.includes('.')) {
                if (string === "") {
                    string += "0";
                }
                string += ".";
                input.value = string;
            }
        } else {
            if ((string === "" && e.target.innerHTML === "0") || (string === "0" && e.target.innerHTML === "0")) {
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        lastButtonClicked = e.target.innerHTML; 
    });
});