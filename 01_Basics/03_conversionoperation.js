// let score = 100;

// console.log(score); // 100
// console.log(typeof score); // number

// let valInNumber = Number(score); // converts score to a number (though it's already a number)
// console.log(valInNumber); // 100
// console.log(typeof valInNumber); // number

// 

// let score = "100abc" ;

// console.log(score); // 100
// console.log(typeof score); // number

// let valInNumber = Number(score); // converts score to a number (though it's already a number)
// console.log(valInNumber); // 100
// console.log(typeof valInNumber); // number


let score = "100";

console.log(score); // 100
console.log(typeof score); // string

let valInNumber = Number(score); // converts score to a number (though it's already a number)
console.log(valInNumber); // 100
console.log(typeof valInNumber); // number



//33=> 33
//33abc => NaN (Not a Number)
//abc => NaN
//true => 1
//false => 0


/************Operations************/

console.log("1"+ 2); // 12 (string concatenation)
console.log("1" - 2); // -1 (string is converted to number and then subtraction is performed)
console.log(1 + "2"); // 12 (string is converted to number and then addition is performed)
console.log("1" + "2"); // 12 (string concatenation)
console.log("1" + 2 + 3); // 123 (string concatenation)
console.log(1 + 2 + "3"); // 33 (string concatenation)