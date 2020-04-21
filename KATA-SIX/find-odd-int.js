// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  
    let obj =  A.reduce((acc, nextVal) => {
       if(nextVal in acc){
         acc[nextVal]++
       }else{
         acc[nextVal] = 1
       }
       return acc
     }, {})
     
     for (const property in obj) {
       if(obj[property] % 2 !== 0){
         return +property
       }
     }
   }