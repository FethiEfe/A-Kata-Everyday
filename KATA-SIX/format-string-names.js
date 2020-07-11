// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''



function list(names){
    return names.reduce((acc,next,ind,arr) => {
      if(ind === arr.length -2){
         acc.push(`${next.name} &`)
      }else if(ind === arr.length -1){
         acc.push(next.name)
      }else{
         acc.push(`${next.name},`)
      }
    return acc
    },[]).join(" ")
}