function solution(number){
    let arr = []
    for(let i = 0; i < number; i++){
      if(i % 3 ===0 || i % 5 ===0){
        arr.push(i)
      }
    }
    return arr.reduce((acc, next) => {
      return acc + next
    }, 0)
  }