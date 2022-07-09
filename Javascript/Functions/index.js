// console.log("This is script tag")
// console.warn("warn");
// console.error("Can't Use HTML");
// document.write("This is Document.write");
// document.write("<h1>Hello</h1>");

// // var
// // we can re-declair as well as re-assign the value.
// var variable1 =10;
// console.log("var keyword--->",variable1);
// // Re-declair
// var variable1 ="Ten";
// console.log("var keyword redeclair-->",variable1);
// // Re-assign
// variable1 = "Exaltech";
// console.log("var keyword re-assign--->",variable1);


// // let
// // we can not declair but we can re-assign
// let variable2 = 20;
// console.log("let keyword--->", variable2);
// // let variable2= "twenty";// can not redeclair
// console.log("let keyword can not redeclair");
// variable2 = 100;
// console.log("let keyword--->", variable2);

// // const
// // we can not re-assign & we can not re-declare.
// const variable3 = 30;
// console.log("const keyword--->", variable3);
// // const varialble3="thirty";//can not re-declare
// console.log("const keyword can not re-declare");
// //variable3 = 100; // can not re-assign
// console.log("const keyword can not re-assign");

// ==============================================================================

// function declaration
addition();


function addition(){
    console.log("Addition----->", 2+4);
}
// addition(); //<--- this is a call 

//function Expression
const substraction = function(){
console.log("substraction===>", 10-3);
};
substraction();
// substraction();

// Arrow function:-
const division=()=>{
    console.log("Division===>", 10 / 3);
}
division();
// division();

// ===============================================================================

// const dynamicValues=(value1,value2)=>{
    const dynamicValues=(value1)=>{
    // return value1+value2;
    return value1 + 20;
}
console.log(dynamicValues(250));