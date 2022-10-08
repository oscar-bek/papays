
//** arraydagi ismlardan 2tasini ajratib olish  */


const list = ["orifjon", "david", "oscar", "shawn", "leo"];
let example = ["orifjon", "leo"]; 

const test = list.filter((ele) =>{
    if (example.includes(ele)){
       
    return true;
} else {
    return false;
}

});

console.log(test);

