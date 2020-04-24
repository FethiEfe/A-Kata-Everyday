// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    //may the code be with you
    let numToStringArr = num.toString().split("")
    let stringNum = numToStringArr.reduce((acc, next)=>{
      acc += Math.pow(next,2)
      return acc
    },"")
    return Number(stringNum)
  }