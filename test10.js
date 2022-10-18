// Sonlarning ketma-ketligiga qarab, shunday function yasalsinki,
// Berilgan son arrayda mavjud bo'lsa, uning indexini qaytarsin
// Agar mavud bo'lmasa, qaysi indexga joylashtirishni ko'rsatsin kerak.
const arr = [2, 3, 5, 7];
let n = arr.length;
let K = 4

const findIndex = (arr, n, K) => {


    let index = arr
      .sort((a, b) => a - b) // tartiblab olamiz
      .findIndex((e) => K <= e)  // kiriladigan raqamni o'rnini belgilaymiz
      return index === -1 ? n : index  // Agar num sortedArray oxirida tegishli bo'lsa yoki arr bo'sh bo'lsa arr uzunligini qaytarsin
       

    // let index = arr.sort((a, b) => a - b).findIndex((currentNum) => K <= currentNum)
    // return index === -1 ? arr.length : index 


    // return arr.concat(K).sort((a, b) => a - b).indexOf(K);
  
}
const result = findIndex(arr, n, K);
console.log("Result:", result);