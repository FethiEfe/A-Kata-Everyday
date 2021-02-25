function naiveStringSearch(longStr, shortStr){
    let count = 0
    for (let i = 0; i < longStr.length; i++){
      if(longStr[i] === shortStr[0]){
      let spliced = longStr.slice(i, (i + shortStr.length ))
      spliced === shortStr && count++
      }
    }
    return count
  }
  
  naiveStringSearch("pentegonagon gona", "gon")