// Reverse string with Recursive

function reverse(str){
  // use pure recursive
  // if string.length === 0 return ""
  // return last char and call recursive with string without latest char
    if(str.length === 0){
      return "";
    }else{
      return str.slice(-1) + reverse(str.slice(0, str.length-1))
    }
}

reverse('awesome') // 'emosewa'
