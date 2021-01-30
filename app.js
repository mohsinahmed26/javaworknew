function setNumber(num) {
    var input = document.getElementById('calc-input');

    input.value += num;
}


function getResult() {
    var input = document.getElementById('calc-input');

    input.value = eval(input.value);
}


function clearResult() {
    var input = document.getElementById('calc-input');

    input.value = "";
}


function numDivide() {
    var input = document.getElementById('calc-input');

    input.value = input.value / 100;
}


function numSquare() {
    var input = document.getElementById('calc-input');

    input.value = input.value ** 2;
}


function numRoot() {
    var input = document.getElementById('calc-input');

    input.value = input.value ** 0.5;
}


function numFactorial() {
    var input = document.getElementById('calc-input');

    if (input.value < 0) {
        input.value = 'Error! Not Found';
    }

    else if (input.value == 0) {
        input.value = 1;
    }

    else {
        let fact = 1;
        for (i = 1; i <= input.value; i++) {
            fact *= i;
        }
        input.value = fact;
    }
}


