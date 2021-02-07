function orderColors(arr){
    let arrOrder = ["red", "yellow", "blue"]
    arr.forEach(el => {
      let found = arrOrder.lastIndexOf(el)
      arrOrder.splice(found,0,el)
    })
    return arrOrder
}
    
orderColors(["yellow","red","blue","yellow","blue","yellow","red","yellow","red","blue","red","yellow","blue"])