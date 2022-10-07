// bitta object hosil qilinsin va insertUser() methodi bolsin, 
// u yerga name, password parametrlarini qabul qilsin. agar name yoki passwordni uzunligi 4 tadan kam bolsa qabul qilmasin va errorni consolega
//  chiqarsin agar 4 tadan ko’p bo’lsa xush kelibsiz <ismi> ni chiqarsin

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
