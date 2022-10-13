const animal_list = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear",
    "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow"];

    function findAnimals(...letters){
        
        return animal_list.filter(w => letters.every(l => w.includes(l)));
      }

    const javob = findAnimals('dcgaot');
    console.log("Javob:", javob);

function find(...letters){
    var words = ["super", "phone", "wood"]
    return words.filter(w => letters.every(l => w.includes(l)));
  }
  
  
  console.log(find("h","n","e"));
