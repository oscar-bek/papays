
// console.log da har xil harflar yozish orqali arraydagi o'sha harflar bor bo'lgan elementni olish






const animal_list = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear",
    "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow"];

    function findAnimals(txt){

      var result = animal_list.filter((x) = txt);
      return result;
  }
      
  
    const result = findAnimals(dgoat);
    console.log(result);
    
    