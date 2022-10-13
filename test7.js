
let first = [1, 2, 3, 4, 5, 6, 7];
let second = [1, 2, 3, 4, 5, 6, 7];


function compareArrays() {
   
    // if(first.length!=second.length)
    //     return false;
    // else {
    //     for(var i=0;i<first.length;i++)
    //         if(first[i]!=second[i])
    //             return false;
    //         return true;
    //     }
    return first.length === second.length;
}
console.log(compareArrays()); 
