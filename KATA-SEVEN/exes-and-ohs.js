// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let obj = str.split("").reduce((acc,val) => {
      let lowerValue = val.toLowerCase()
       if(lowerValue in acc){
         acc[lowerValue]++
       }else{
         acc[lowerValue] =1
       }
       return acc
     }, {})
     console.log(obj)
     return obj.x === obj.o ? true : false
   }