function getNumberFromInput() {

    var data = '123';

    return data
}
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



function clickNumber() {
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            console.log(this.value);

        });
    }
}
clickNumber();