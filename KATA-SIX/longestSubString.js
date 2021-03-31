//Return longest substring with all distinct characters

function findLongestSubString(str){
    let i = 0
    let maxLength = 0
    let tempLength=  0
    let lookup = {}

    while(i < str.length){
        if(!(str[i] in lookup)){
            lookup[str[i]] = i
            i++
            tempLength++
        }else{
            i = lookup[str[i]] + 1
            lookup = {}
            maxLength = Math.max(maxLength, tempLength)
            tempLength = 0
        }
        
    }
    return Math.max(maxLength, tempLength)
}
findLongestSubString("longestsubstring")