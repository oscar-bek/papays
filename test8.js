const bcrypt = require('bcryptjs');


class User {

  inputData(data_1, data_2) {
    const data_1 = this.hashPassword.password;
  }

async hashPassword(password) {
 
  const hash = await bcrypt.hash(password, 5);

  console.log(hash); 
}

hideNumber(phone) {
  
  let hideNum = [];
	for(let i = 0; i < phone.length; i++){
    if(i < phone.length-4){
      hideNum.push("*");
    }else{
      hideNum.push(phone[i]);
    }
  }
  return hideNum.join("");
}
  console.log(hideNum);
}



// }
const user = new User();
user.hashPassword("santa0922");
user.hideNumber("01020207655");
