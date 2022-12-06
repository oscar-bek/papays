// K-Task: shunday function yasang, u arrayni argument sifatida qabul qilsin hamda ushbu arrayning eng katta integerini qaytarsin.
//  Masalada Math objectini qollang. Masalan: getMax([1,5,3]) return qilsin 5ni.

let array = [1, 2, 3, 4, 5]


function getMax(array) {
  return Math.max.apply(null, array);
}

result = getMax(array);
console.log("Eng katta son:", result);
