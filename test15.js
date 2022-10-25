// shunday class yasangki uni constructoriga ikkita integer son kiritilsin, 
// hamda bu classning 3ta methodini yasang: bular kopaytirish, 
// biri usha ikki son yigindisini qaytarishi va ohirgi metodi 
// esa bu sonlarning kvadratlari yig'indisini qaytarsin.

class Hisob {
  
  constructor(a, b) {
    this.a = a;
    this.b = b;
}

kopaytirish() {
 
let result = this.a * this.b;
console.log("ko'paytma natijasi:", result);
}


qoshish() {
  let result = this.a + this.b;
  console.log("qo'shilma natijasi:", result);
};

kvadratYigindisi() {
  let result = Math.pow(this.a, 2) + Math.pow(this.b, 2);
  console.log("kvadrat natijasi:", result);
};
};

let hisob = new Hisob(3, 4);
hisob.kopaytirish();
hisob.qoshish();
hisob.kvadratYigindisi();


