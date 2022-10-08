
//** array hosil qiling arrayni ichidagi qiymatlarda bosh qiymat ham bolsin (null) va 
//**agar bosh qiymatlar bolsa ularni delete qiilib qiymati bor arrayni qaytarsin */


const guys = ['', 'Leo', 'Walter', 'shawn', 'John'];

const result = guys.map(function(item) {
    return item == '' ? 'david' : item;
});

console.log(result);