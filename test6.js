const list = ["orifjon", "david", "oscar", "shawn"," leo"];
// const result = list.slice(3);
// console.log("result:", result);

const test = list.filter((ele) =>{
    if (ele == list[0] || ele ==list[4]){
       
    return true;
} else {
    return false;
}

});

console.log(test);

