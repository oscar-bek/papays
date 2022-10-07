//** array hosil qiling arrayni ichidagi qiymatlarda bosh qiymat ham bolsin (null) va 
//**agar bosh qiymatlar bolsa ularni delete qiilib qiymati bor arrayni qaytarsin */

const months = [null, 'Lewo', 'Walter', 'shawn', 'John'];

months.splice(0, 1, 'David');
// inserts at index 1
console.log(months);