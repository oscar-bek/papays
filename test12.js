// Shunday function hosil qilingki uni 2ta integer argumentlarini olsin hamda ular yillar bolsin
// => findMeSundays( 2014, 2022 )__bu function 1 - yanvar
// => yakshanba bolgan yillarni bir arrayga joylab return qilsin;


const findMeSundays = function (a, b){
    
    
    for ( let year = a; year <= b; year++ )
    {
    const d = new Date(year, 0, 1);
        if ( d.getDay() === 0 )
            return year;
    }
}

const result = findMeSundays( 2014, 2022 );
console.log('1st January is being a Sunday',result);
