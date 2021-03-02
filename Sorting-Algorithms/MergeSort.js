let merge = (arr1, arr2) => {
    let i = 0
    let j = 0
    let mergedArr = []
    console.log(arr1,arr2)
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i])
            i++
        }else{
            mergedArr.push(arr2[j])
            j++
        }
      
    }
    while(i < arr1.length){
      mergedArr.push(arr1[i])
      i++
    }
    while(j < arr2.length){
      mergedArr.push(arr2[j])
      j++
    }
    return mergedArr
}

let mergeSort = (arr) => {
    //code basse
    if(arr.length <= 1) return arr
    let midpoint = Math.floor(arr.length/2)
    let right = mergeSort(arr.slice(0,midpoint))
    let left = mergeSort(arr.slice(midpoint))
    return merge(right, left)
}

mergeSort([4,1,5,2,61,54,3])