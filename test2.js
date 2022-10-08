
//** 1 ~ 10gacha bo'lgan sonlarni ikkiga yani juft va toq sonlarga ajratish */

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = list.filter((ele) => {	
        if (ele % 2 === 0) {  
       return true; 
    } else {
        return false;
    }
});
console.log("juft sonlar:", result);


console.log("========================");


const result_2 = list.filter((ele) => {	
    if (ele % 2 === 1) {  
   return true; 
} else {
    return false;
}
});
console.log("juft sonlar:", result_2);