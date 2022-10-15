// shunday bir function yasalsin, unga string pass qilinadi. 
// stringda ham harf ham 1 ~ 9 gacha bolgan sonlar kiritilsin. 
// symbollarni ishlatish mumkin emas,
//  va sonlarni alohida harflarni alohida object qilib qaytaradi,


 
function sortString (str) {

    let obj = {
        letter: 0,
        digit: 0,
    };
    str.map((value, index) => {
        if (value.match(/[0-9]+/g)) obj.letter++; 
        else if (value.match(/[a-zA-Z]+/g))obj.digit++;
        
    });

    return obj;
}

 const result = sortString("abs365fhd387".split(""));
 console.log("javob", result);

    

    // let textArray = str.split('')
    // let text = []
    // let num = []
    // textArray.forEach(e=>{
    //     if (e>-1) {
    //         num.push(e)
    //     } else {
    //         text.push(e)
    //     }
    // })

    // return [text.length, num.length]


//  const result = sortString(("abs365fhd387");
//  console.log("javob", result);

//     return {text, num};
// }

//  const result = sortString("abs365fhd387");
//  console.log(result);



