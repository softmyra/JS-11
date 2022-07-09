// // Arthmatic operators
// const arthimaticoperation=(a,b) => {
//     console.log("addition===>,a+b");
// console.log(a+b);
// // Substraction
// console.log("substraction====>", a-b);
// // Multiplication
// console.log("Multiplication====>", a*b);
// // Division
// console.log("Division====>", a / b);
// // Modulus/Exponetiation/Reminder
// console.log("modulus=====>", a % b);
// // Increment
// console.log("increament====>", a++); //a= a+1
// // Decrement 
// console.log("Decrement====>", a--);  //a= a-1

// };
// arthimaticoperation(10,20);
//===========================================================================================================================================================

// const AssignmentOperator=(a,b)=>{
// // // Equal to
// // // let data = "Exaltech"
// // // console.log (data);
// // // Addition Asignment
// console.log("Addition=====>",(a += b)); //a=a+b isme b ki value ko a me assign kar diya.
// // //substraction asignment
// console.log("Substraction====>",(a -= b)); //a= a-b isme b ki value 10 hai aur a ki value 30 hai
// // //Division Asignment
// console.log("Division====>",(a /= b)); //a= a/b 20/10 output stored in a
// // //Modulus / Reminder
// console.log("Modulus====>",(a %= b)); //a= a%b
// console.log("Multiplication===>", (a *=b)); //a=a*b
// console.log("Exponentiation====>",(a **= 4)); //a=2*2*2*2
// }
// AssignmentOperator(2, 10);

//==========================================================================================================================
// Comparision Operator

// const Comparisionoperator=(a,b)=>{
// //Equality check
// // console.log(a==b); // a is 20 & b is 10 thats why output shows True.
// //Not Equal to
// // console.log(a !=b); //a is not equal to b thats why its shows false.
// //Strict Equality check
// // console.log(a===b); // its strictly check data type as well as values.
// //Strict Not Equality check
// // console.log(a !== b);
// //Greater than
// // console.log(a>b);
// //Greater than Equal to
// // console.log(a>=b);
// //Less than
// // console.log(a<b);
// //less than Equal to
// // console.log(a<=b);
// };
// Comparisionoperator(10,10)
//================================================================================================================================================

//Logical operators // if condition 1 & condition 2 is true then it shows true & in both condition, one as a false & second is true then it shows false.
// True---True=True
// True---False=False
// False---True=False
// False---False=False
const Logicaloperators=(a,b) => {
// AND AND &&
console.log(10 >= 10 && 20 > 10); //True && True=True 
console.log(5 >= 10 && 9 > 10); //False && False=False 
console.log(10 >= 10 && 9 > 10); //True && False=False 
console.log(5 >= 10 && 20 > 10); //False && True=False 
// a<=b || a<b;
// console.log(a<=b || a<b); //True || True = True
// console.log(20<=10 || 20<10); //True || True = True
// console.log(20<=10 || 5<10); //False || True = True
};
Logicaloperators(5,11);

// Logical Or Or Logical ||
// True || True = True
// True || False= True
// False|| True= True
// False|| False=False