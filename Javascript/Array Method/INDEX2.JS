// const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 200, 20];
const products = [
    {category: "shoes", size: 7, color: "Black", Brand: "Adidas",id:1,price: 2000},
    {category: "shoes", size: 8, color: "black", Brand: "Puma",id:2, price:4000 },
    {category: "shoes", size: 9, color: "White", Brand: "puma",id:3,price:3000},
    {category: "shoes", size: 8, color: "red", Brand: "Nike",id:4,price:4000},
    {category: "flipper", size: 9, color: "Green", Brand: "adidad",id:5,price:6000},
    {category: "shoes", size: 7, color: "Orange", Brand: "nike",id:6,price:7000},
];

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "i",
];

// const output = products.sort((elemOne, elemtwo) => elemOne.Brand.toLowerCase()> elemtwo.Brand.toLowerCase ? -1 : -1);
// console.log(output);

// const output = products.reduce(
//     (accumulator,currentvalue) => {
//         return accumulator + currentvalue.price;
//     }, 0);
//    console.log(products.reverse());
//    console.log(Array.from("ABCDEF"));
//    console.log(nums.fill("ABC",2,5));
//    console.log(nums.join());
// const something = { value: 10};
//    console.log(nums.join());
//    console.log(Array.isArray(nums));
//    console.log(letters.toString());
//   console.log(letters.forEach((item, index)=> console.log(`${index} ${item}`)));
const nums =[2,3,5,6,8,9,13,15,20];
const output =nums.filter((item) => item >= 8)
.map((item)=> item * 2);
console.Log(output);
