const personDetails =[
    "Rehan",
    "choush",
    2022-1992,
    "Medicine Representative",
    ["AL","Rehan","choush",],
    true,
];
const type = [];
// Dynamic Reading values from an array
// Typeof 👇(array k ander kis type ka hai jaanna hai to)
// let a = typeof personDetails[5];
// console.log(a);
// console.log(personDetails[5]);

// for(let i =0; i<personDetails.length;i++){
//     console.log(personDetails[i]);
// }

// Dynamic Creating an array
for(let i = 0; i < personDetails.length;i++){
    // type[i] = typeof Details[i];
    console.log(typeof personDetails[i])
}
// console.log(type [i]);