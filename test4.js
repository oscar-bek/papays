

let person = {
    insertUser(name, password) {
        if(name.length < 4 || password.length < 4) {
            console.log("error");
        } else {
           console.log("Hush kelibsiz!!!");
        }
    }
};
    


person.insertUser("ali", 123);
