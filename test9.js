
// console.log da har xil harflar yozish orqali arraydagi o'sha harflar bor bo'lgan elementni olish


const animal_list = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear",
    "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow"];



    function findAnimals(txt){
      newArr = [];
      animal_list.map(item => {
          txt.includes(item) ? newArr.push(item) : '';
      });
    return newArr;
  }
      
  
    const result = findAnimals("dgoat");
    console.log(result);
 