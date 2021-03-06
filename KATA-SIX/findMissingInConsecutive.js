function findMissingInConsecutive(arr){
  let foundMissing = undefined
  for(let i = 0; i < arr.length; i++){
    let lowest = arr[i]
    for(let j = i+ 1; j < arr.length; j++){
        if(arr[j] < arr[lowest]){
          lowest = j  
        }
    }
    if(arr[i] > arr[lowest]){
      let temp = arr[i] 
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
    if(arr[i] !== i + 1){
      return foundMissing = i + 1
    }
  }
  return foundMissing ? foundMissing : "no missing"
}
findMissingInConsecutive([2,7,3,4,1,6,8,9]) //5