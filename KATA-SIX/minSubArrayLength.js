function minSubArrayLen(arr, num){
    let sum = 0
    let maxIdx = 0
    let left = 0
    let right = arr.length - 1
    let length = arr.length

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        if(arr[maxIdx] < arr[i]){
            maxIdx = i
        }
        
    }
    if(arr[maxIdx] >= num) return 1
    if(sum < num) return 0

    while(sum >= num){
        if(arr[left] > arr[right]){
            sum = sum - arr[right]
            right--
        }else{
            sum = sum - arr[left]
            left++
        }
        length--
    }
    return ++length

}

minSubArrLength([1,4,16,22,5,7,8,9,10],55)