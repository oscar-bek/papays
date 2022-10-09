
//** array hosil qiling arrayni ichidagi qiymatlarda bosh qiymat ham bolsin (null) va 
//**agar bosh qiymatlar bolsa ularni delete qiilib qiymati bor arrayni qaytarsin */


const guys = [null, 'Leo', 'Walter', 'shawn', 'John'];

const result = guys.filter((ele) => {
    if(guys.includes(null)) {
        return ele;
    } else {
        return false
    }
    
});


console.log(result);