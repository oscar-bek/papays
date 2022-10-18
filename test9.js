
// console.log da har xil harflar yozish orqali arraydagi o'sha harflar bor bo'lgan elementni olish





const animal_list = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear",
    "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow"];

function findAnimals(txt) {
    const answer = animal_list.filter(ele => {
        const animal = ele.split('');
        const result = animal.map(letter => {
            if (txt.includes(letter)) return true;
            else return false;
        });
        return !result.includes(false);
    });

    return answer;
}

const javob = findAnimals('adkjdforglt');
console.log('Javob:', javob);
    
    