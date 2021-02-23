function binarySearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    let end = arr.length -1
    let middle = Math.floor((start + end) / 2)
    
    while(arr[middle] !== value && start < end){
     
      if(arr[middle] < value){
         start = middle + 1
      }else{
         end = middle -1
      }
      middle = Math.floor((start + end) / 2)
       console.log(start, end, middle)
    }
    return arr[middle] === value ? middle : -1
  }
  
  binarySearch([5,6,10,13,14,16,18], 14)