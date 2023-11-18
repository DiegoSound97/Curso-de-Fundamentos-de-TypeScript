(()=>{
  // De forma inferidad
  let productPrice=100
  productPrice=12
  console.log("productPrice",productPrice);

  //De forma explicita
  let customerAge: number=28
  //customerAge=customerAge+"1"
  customerAge=customerAge+1  //281
  console.log("customerAge",customerAge);

  let productInStock:number;
  console.log("productInStock",productInStock);
  if(productInStock>10){
    console.log("Is greater");
  }

  let discount=parseInt("20")
  if(discount<=200){
    console.log("apply");
  }else{
    console.log("Not Apply");

    }


  console.log("discount",discount);

  // Traducir de hexa o binario a numero decimal
  let hex=0xfff
  console.log("hex",hex);
  let bin=0b1010  //10
  console.log("bin",bin);

  const myNumber: number=10;
})();
