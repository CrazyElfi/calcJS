
let inputArr = [0];
console.log('inputArr', inputArr);
let isCalculated = false;
console.log('isCalculated', isCalculated);

document.getElementById('area').value = inputArr.join('');

function setEventsToNumbers() {
    let buttons = document.getElementsByClassName('arrEl');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            console.log("clickedNumber:",this.value);

            // // 00
            // if (inputArr[0] === 0 && this.value === "0"){
            //     console.log('1');
            //     inputArr = [0];
            //     return;
            // }
            // // 1-9
            // if (inputArr[0] === 0 &&
            //     this.value !== "0" &&
            //     this.value !== "+" &&
            //     this.value !== "."){
            //     console.log('2');
            //     // inputArr = [this.value];
            //     isCalculated = false;
            //     console.log('isCalculated', isCalculated);
            //     inputArr.push(this.value);
            //     document.getElementById('area').value = inputArr.join('');
            //     return;
            // }
            // // xx0
            //
            // if (this.value === "0" && inputArr.length > 0 && isCalculated === true) {
            //     console.log('3');
            //     inputArr = [0];
            //     document.getElementById('area').value = inputArr.join('');
            //     return;
            // }
            inputArr.push(this.value);
            document.getElementById('area').value = inputArr.join('');
            console.log('afterClicked:', inputArr)
        });
    }
}
setEventsToNumbers();

function clean() {
    console.log('clean');
    document.getElementById('area').value = '0';
    inputArr = [];
}

function equality() {
    let input = document.getElementById('area');
    let resultCalc = calc(input.value);
    input.value = resultCalc;
    isCalculated = false;
    console.log('isCalculated', isCalculated);
    inputArr = [resultCalc];
}

function strToNumb(inputArr) {
    let arr = [];
    let tempNumber = '';
    console.log('strToN222umb: ',inputArr);

    for(let i = 0; i < inputArr.length; i++) {
    console.log('i',i);
        if( inputArr[i] !== "+" &&
            inputArr[i] !== "-" &&
            inputArr[i] !== "*" &&
            inputArr[i] !== "/" &&
            inputArr[i] !== "(" &&
            inputArr[i] !== ")" &&
            inputArr[i] !== "." ) {
            tempNumber = tempNumber + inputArr[i];
        } else {
            if(tempNumber === '') {
                arr.push(inputArr[i]);
            } else {
                arr.push(parseInt(tempNumber));
                arr.push(inputArr[i]);
                tempNumber = '';
            }
        }

        if(i === inputArr.length - 1 && tempNumber !== '') {
            arr.push(parseInt(tempNumber));
            tempNumber = '';
        }
    }
    arr = concatSignWithNumber(arr);
    console.log('strToNumb: ',arr);
    return arr;
}
// strToNumb(["-", "2", "+", "5"]);

function concatSignWithNumber(arr) {
    console.log('arr: ',arr);

    for(let i = 0; i < arr.length; i++) {
        if( arr[i] === '-') {
            arr[i + 1] = - arr[i + 1];
            arr.splice(i,2, arr[i + 1]);
            console.log('arr[i] === \'-\': ',arr);
            i = 0;
        }

        if( arr[i] === '.') {
            arr[i - 1] = parseFloat(arr[i - 1] + arr[i] + arr[i + 1]);
            arr.splice(i - 1,3, arr[i - 1]);
            console.log('arr[i] === \'.\': ',arr);
            i = 0;
        }

        if( arr[i] === '+') {
            arr.splice(i,2, arr[i + 1]);
            i = 0;
        }
    }
    console.log('concatSignWithNumber:', arr);
    return arr;
}
// concatSignWithNumber( ["-", "2", "+", "5"]);

function removeTrash(inputArr) {
    let arr = [];

    for(let i = 0; i < inputArr.length; i++) {
        if (inputArr[0] === '+') {
            inputArr.shift();
            console.log('arrfddf');
        }
        if (inputArr[0] === '-') {
            console.log('huhu')
        }
    }

    console.log('arr2 ',inputArr);
    return inputArr;
}

function calc(arr) {

    var order = strToNumb(arr);

    for (let i = 0; i < order.length; i++) {
        let a = order[i - 1];
        let b = order[i + 1];

        console.log( "при i = " + i + ": " +'a: '+ a + ' b: '+ b);
        if(order[i] === '*') {
            let result = a * b;
            order = insert(order, i, result);
            console.log('result: ',result);
            console.log('finish: ',order);
            i=0
        }
        if(order[i] === '/') {
            let result = a / b;
            order = insert(order, i, result);
            console.log('result: ',result);
            console.log('finish: ',order);
            i=0
        }
    }


    console.log('order +/-: ',order);
    let result = 0;
    for (let i = 0; i < order.length; i++) {
      result = result + order[i];
      console.log('result: ',result);
    }
    order = result;

    return order;
}
// calc('-8+9');

function insert(arr, index, data) {
    if(arr === "undefined") {
        console.log('no arr!!!!!');
        return;
    }
    let firstPart = arr.splice(0, index-1);
    let secondPart = arr.splice(index+2);
    firstPart.push(data);
    return firstPart.concat(secondPart);
}

// function bracketsSearch (arr) {
//     if(arr === "undefined") {
//         console.log('no arr!!!!!');
//         return;
//     }
//     let stack =[];
//     let bracketsOpen = '(';
//     let bracketsClose = ')';
//
//     var indices = [];
//
//     var idx = arr.indexOf(bracketsOpen);
//     while (idx !== -1) {
//         indices.push(idx);
//         idx = arr.indexOf(bracketsOpen, idx + 1);
//     }
//
//     console.log(indices);
//
//     // let firstPart = arr.splice(index(bracketsOpen));
//     // let secondPart = arr.splice(index(bracketsClose));
//     // firstPart.push(data);
//     // return firstPart.concat(secondPart);
//
// }
//
// console.log(bracketsSearch(order));
//
// var arr = [127, '-', 4, '+', '+'];
// console.log('arr.length = ', arr.length);
//
//
// function test(arr) {
//       console.log('arr:', arr);
// //   for (var i = 0; i < arr.length; i++) {
// //     if(i === arr.length-1) {
// //      arr.splice(i, i-1);
// //       console.log('arr', arr);
// //     }
// //   }
// }
//
// test(arr);


