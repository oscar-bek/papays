
//**  functiondagi ikkita argumentlardan birinigina return qilish */

let a = ['musobaqa', 'golibi', 'bolgan', 'kishi', 'anvar'];
let b = 'anvar';
const result = a.filter((ele) => {
    if(ele.includes(b)){
        return false;
    } else {
      return true;
    }
    
});

console.log(result);



