//**  functiondagi ikkita argumentlardan birinigina return qilish */

let compitation = a = ['musobaqa', 'golibi', 'bolgan', 'kishi'], b = 'anvar';
const skip = compitation.filter((ele) => {
    return ele > b;
});

console.log(skip);

// let comp = c = ['musobaqa', 'golibi', 'bolgan', 'kishi'], d = 'anvar';


// comp.filter(function(c, d) { 
//       delete comp.d;
//     }); 
//   console.log(comp);