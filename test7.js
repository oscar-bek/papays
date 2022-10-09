let first = [1, 2 ,3 ,4 ,5 ,6, 7];
let second = [1, 2 ,3 ,4 ,5 ,6, 7];

// const test  = first.map((array) => {
//     if(second.includes(array)) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(test);

const test = first.every( ele => second.includes(ele));

console.log(test);
