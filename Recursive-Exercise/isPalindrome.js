function isPalindrome(str){
    // declare an empty string for reversed string
    // save str because I will change it
    // use helper recursive to prevent reset
    // code base : return empty string when str.length is empty
    // push last string to reversed string
    // compare two string
    let reversedString = ""
    let immutableString = str
    function helperRecursive(newStr){
      if(newStr.length === 0) return ""
      reversedString += newStr.slice(-1)
      return helperRecursive(newStr.slice(0,newStr.length-1)) 
    }
    helperRecursive(str)
    console.log(reversedString)
    console.log(immutableString)
    return reversedString === immutableString ? true : false
  }
  // isPalindrome('awesome') // false
  // isPalindrome('foobar') // false
  // isPalindrome('tacocat') // true
  // isPalindrome('amanaplanacanalpanama') // true
  // isPalindrome('amanaplanacanalpandemonium') // false