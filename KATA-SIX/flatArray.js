
function flatArr(arr){
    let flattedArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length === undefined){
         flattedArr.push(arr[i])
      }else{
        flattedArr.push(...flatArr(arr[i]))
      }
  
    }
    return flattedArr
  }
  
  
  flatArr([1,2,[3,4],[4,5,6,7,[1,2]]])