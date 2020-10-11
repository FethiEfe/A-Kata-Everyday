// check anagrams with frequency counter. Should be O(N)

function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false
    if(str1.length === 0 &&  str2.length === 0) return true
    
    let frequency1 ={}
    let frequency2={}
  
    for(let char of str1){
      if(char in frequency1){
        frequency1[char]++
      }else{
        frequency1[char] = 1
      }
    }
    for(let char of str2){
      if(char in frequency2){
        frequency2[char]++
      }else{
        frequency2[char] = 1
      }
    }
  
    for(key in frequency1){
      if(frequency2[key] !== frequency1[key]) return false
    }
    return true
  
  }
  
  validAnagram("rat","car")