// ikkita stringni o'ziga argument qilib olib, har ikkalasida qatnashgan harflarni bir yangi arrayda return qilib qaytaradigan function yasang


function findSimilarLetters(a, b) { 
  let similar = "";
  for (let i = 0; i < a.length; i += 1) {
    if (similar.indexOf(a[i]) === -1) {
      if (b.indexOf(a[i]) !== -1) {
        similar += a[i];
      }
    }
  }
  return similar.split();

};
 



 console.log(findSimilarLetters("hello", "everyone"));


