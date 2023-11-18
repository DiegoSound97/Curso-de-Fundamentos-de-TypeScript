(()=>{
  let prices=[1,2,2,1,1,2,212,'hola',true];
  //prices.push("saas")  // No se puede
  //prices.push(true)    // No se puede
  prices.push(121212)

  let products=['hola',true];
  //products.push(12)  // No se puede
  products.push(false)

  let mixed: (number| string|boolean|object)[]=['hola',true];
  mixed.push(12)
  mixed.push("as")
  mixed.push(true)
  mixed.push({})
  mixed.push([])

  let numbers=[1,2,2,1,1,2,212];
  numbers.map(item=> item*2)


})()
