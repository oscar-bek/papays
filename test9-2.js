// shunday bir function yasalsin, unga string pass qilinadi. 
// stringda ham harf ham 1 ~ 9 gacha bolgan sonlar kiritilsin. 
// symbollarni ishlatish mumkin emas,
//  va sonlarni alohida harflarni alohida object qilib qaytaradi,



function sortString (str) {
    let textArray = str.split('')
    let text = []
    let num = []
    textArray.forEach(e=>{
        if (e>-1) {
            num.push(e)
        } else {
            text.push(e)
        }
    })
    return text, num;
}

 const result = sortString("abs365fhd387");
 console.log(result);

