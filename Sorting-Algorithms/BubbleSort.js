swap = (arr, j) => [arr[j], arr[j+1]] =  [arr[j+1], arr[j]]

function bubleSort(arr){
    var noSwaps
    for(var i = arr.length -1 ; i > 0; i--){
        noSwaps = true
        for(var j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j)
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}
bubleSort([1,4,3,7,8,9])
