// function getNumberFromInput() {
//
//     var data = '123';
//
//     return data
// }
//
// var numbers = getNumberFromInput();
// console.log(numbers)
//
//
// function clearNumbers() {
//     // press button C to clear
// }
//
// function minus(a,b) {
//
// }
//
// function plus() {
//
// }
//
//
// // later
// function test(a,b,action) {
//     switch (action) {
//
//     }
//     return result;
// }
//
// console.log(minus(2,3));

// function test(a) {
//     console.log(a);
//
// }
// document.getElementsByClassName("btn").onclsick = function () {
//     console.log('234');
// };
// console.log(document.getElementById('test'));
// console.log(document.getElementsByClassName("btn"));
//

// var numbInside = 0;
// var currentNumber = 0;
var savedNumber = 0;

function setEventsToNumbers() {
    var buttons = document.getElementsByClassName('number');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {

            console.log("clickedNumber:",this.value);
            // currentNumber = this.value;

            let inputNumber = Number(document.getElementById('area').value);
            let result = null;

            if(inputNumber === 0){
                result = this.value;
            } else {
                result = inputNumber + this.value;
            }

            document.getElementById('area').setAttribute('value', result);
        });
    }
}
setEventsToNumbers();



function addition() {
    let inputNumber = Number(document.getElementById('area').value);
    console.log("inputNumber = " + inputNumber);

    let string = inputNumber + "+";

    // console.log('result = ' + result);
    // document.getElementById('area').setAttribute('value', result);


}

// addition();

// function subtraction() {
//     let num2 = Number(document.getElementById('area').value);
//     console.log("num2 = " + num2);
//
//     let resultSubtr = num2 + Number(NumbInside);
//     console.log('resultSubtr = ' + resultSubtr);
//     document.getElementById('area').setAttribute('value', resultSubtr);
// }

// subtraction();

function clean() {
    document.getElementById('area').setAttribute('value','0');
}

// clean();