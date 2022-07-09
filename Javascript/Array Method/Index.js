// const letters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "i",
// ];

// console.log(letters.pop(),"==>", letters);
// POP:--> It returns the last element of your array & it also modifies the original array.
// console.log(letters.push(),"==>", letters);
// console.log(letters.push("abc"),"==>",);
// console.log(letters.push("abc"),"==>", letters);
// PUSH:--> It returns the lenght or updated lenght of the original array & adds given element at the end of your original array.
// console.log(letters.shift(),"==>", letters);
// SHIFT:--> Shift method remove and returns of your first element of array & it also modifies the orginal array.
// console.log(letters.unshift(),"==>", letters);
// console.log(letters.unshift("1000","100","10","1"),"==>", letters);
// UNSHIFT:--> It Returns the updated lenght of the original array and adds the given element at the start of the orginal array.
// console.log(letters.find((Anything)=> Anything=== "z"));
// console.log(letters.find((item) => item === "z"));
// FIND:--> It Returns the first element where the given condition/logic in the callback function is true,it returns undefined/true/false if no element 
// matches the given condition/logic
// console.log(letters.findIndex((item)=>item === "z"));
// console.log(letters.findIndex((item)=>item === "x"));
// FINDINDEX:-->It Returns the first element where the given condition/logic in the callback function is true,it returns -1 if no element 
// matches the given condition/logic.
// console.log(letters.includes("z"));
//INCLUDES:-->It Returns true if the element exist in the array,otherwise false.
// console.log(letters.includes("y"));
// console.log(letters.indexOf("z")); 
//INDEXOF:-->It Returns the first index of given element.
const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 200, 20];
const products = [
    {category: "shoes", size: 7, color: "Black", Brand: "Adidas",id:1,price: 2000},
    {category: "shoes", size: 8, color: "black", Brand: "Puma",id:2, price:4000 },
    {category: "shoes", size: 9, color: "White", Brand: "puma",id:3,price:3000},
    {category: "shoes", size: 8, color: "red", Brand: "Nike",id:4,price:4000},
    {category: "flipper", size: 9, color: "Green", Brand: "adidad",id:5,price:6000},
    {category: "shoes", size: 7, color: "Orange", Brand: "nike",id:6,price:7000},
];

const ouput = products.map((item) => item.Brand === "Adiddas" || item.Brand === adidas ? item.price * 2 : item.price);
console.log(output);

// const output =products.filter((item) => item.price >= 2000 && item.price <= 5000);
// console.log(output);

// console.log(nums.some((item) => item % 2 === 1)); 
//SOME:-->It Returns true if anyone of the element of an array matches the given condition in its callback funtion,returns false otherwise.
// console.log(nums.every((item) => item > 10));
//EVERY:--> It Returns true if all of the element of an array matches the given condition in its callback function,returns false otherwise.
// console.log(letters.slice(5, 10),);
//SLICE:--> It Returns a copy/part of the orginal array considering the passes arguments.it can accept upto 2 arguments,first argument is start index,second argument is end index.
//it includes start indexed value but except end indexed.
// console.log(letters.splice(5, 5),"--->",letters);
// console.log(letters.splice(5, 5, 100,200,1.0),"--->",letters);
// SPLICE:--> It can accept multiple arguments, however,the first argument will be the start index and the second argument
// will be the number of element to be removed,the rest arguments will be added in your orginal array.it returns the item.
// that have been removed and it does modify the original array.
// console.log(products.filter((item) => item.id !== 5)); //bahot zyada important hai***
//console.log(products.filter((item)=>item.color === "black" && item.brand === "puma"))//try this 
// console.log(products.map((item)=> item.size + 0.5));// bahot zyada important hai***
// console.log(products.map((item)=> item.id * 10));
// const arr1 = ["a","b"];
// const arr2 = ["c","b"];
// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));
// console.log(output);
// const output = products.sort((itemOne, itemTwo) => itemOne.Brand.toLowerCase() > itemTwo.Brand.toLowerCase() ? 1 : -1);