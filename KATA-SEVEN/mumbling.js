// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
let sum = []
  for(let i=0; i < s.length; i++){
    sum.push("-")
    for(let y = 0; y <=  i; y++){
      y ===0 ? sum.push(s[i].toUpperCase()) : sum.push(s[i].toLowerCase())
    }
  }
  return sum.slice(1).join("")
}