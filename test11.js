const arr = [['ab', 'cd'], ['hello', 'hi'], ['me', 'one']];

joinFunction = (arr) => {
  return arr =  JSON.stringify(arr).replace(/\"|\[\[|\]\]/g , "").replace(/\],\[/g , "").replace(/,/g , "");

    // return arr.join("").replace(/,/g,"")
}


let result = joinFunction(arr);
console.log(result);