const bcrypt = require('bcryptjs');


class User {

async hashPassword(password) {
 
  const hash = await bcrypt.hash(password, 5);

  console.log(hash); 
}

asynchideNumber(phone) {
  let hideNum = 
  

  console.log(hideNum);
}

}

// }
const user = new User();
user.hashPassword("santa0922");
user.hideNumber([01020207655]);
// const myFish = [0, 1, 0, 8, 9, 3, 2, 1, 9, 8, 9];
// const remove = myFish.slice(8,9,10,11);
// const removed = myFish.splice(8,8,9,10,11, '*');
// console.log(myFish);