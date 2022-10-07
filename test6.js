//** arraydagi ismlardan 2tasini ajratib olish  */

const list = ["orifjon", "david", "oscar", "shawn"," leo"];


const test = list.filter((ele) =>{
    if (ele == list[0] || ele ==list[4]){
       
    return true;
} else {
    return false;
}

});

console.log(test);

