// Objectning elementlar sonini return qiladigan function yozing. 
let  myobj = {name: "malik", age: 24}


function findNumberObject () {

  let count = 0;
   for (let k in myobj) if (myobj.hasOwnProperty(k)) count++;
 
  console.log("javob:", count);
}

findNumberObject();

