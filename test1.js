//** quyidagi arraydagi raqamlarni reverse ishlatmasdan teskaricha hosil qilish */ 

let number = [2, 34, 1, 34, 54, 4, 109, 45, 999, 5, 23]


.reduceRight(function(previous, current) { 
  previous.push(current); 
    return previous; }, []); 
console.log(number)

// let n = number.length-1;

// for(let i=0; i<=n/2; i++) {
//   let reverse = number[i];
//   number[i] = number[n-i];
//   number[n-i] = reverse;
// }
// console.log(number);