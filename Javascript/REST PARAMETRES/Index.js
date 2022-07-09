console.log("This is Js File for rest parameters");
// Rest Parameter
// A rest parameters allows a function to accept indefinite parameters & store in an array
// Rest parameters It must be in the last
// It introduce in ES6
const restparameters = (a,b, ...data)=>{
console.log(data);    
console.log(a);
console.log(b);
console.log(data[2]);
let c = data[2];
console.log(c);

};
restparameters(10,20,30,40,50,60,70);

// ==============================================================================================================

//Template Literal

const Templateliteral = (name, age) => {
console.log(name);
console.log(age);    
console.log ("This" + " " + "is" +" " + "my" + " " + "age");
console.log(`This is
${name}
${age}
year
old`);
}
Templateliteral("Rehan", 29);