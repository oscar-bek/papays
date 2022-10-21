// Shunday function hosil qilingki uni 2ta integer argumentlarini olsin hamda ular yillar bolsin
// => findMeSundays( 2014, 2022 )__bu function 1 - yanvar
// => yakshanba bolgan yillarni bir arrayga joylab return qilsin;


const findMeSundays = function ( a, b )
{
  
  for (let year = a; year <= b; year++) {
    const d = new Date(year, 0, 1);
      if ( d.getDay() === 0 )
          console.log(year);
  }
};

findMeSundays(2014, 2050);


function getSundays(y){
  y=y|| new Date().getFullYear();
  var A=[];
  var D=new Date(y,0,1)
  var day= D.getDay();
  if(day!=0) D.setDate(D.getDate()+(7-day));
  A[0]=D.toLocaleString();
  while(D){
      D.setDate(D.getDate()+7);
      if(D.getFullYear()!=y) return A;
      A.push(D.toLocaleDateString());
  }
}

getSundays(2020);