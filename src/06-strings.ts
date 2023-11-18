(()=>{
  let productTitle='My Amazing Product'
  productTitle='My Amazing Product changed'
  console.log("productTitle",productTitle);

  const productDescription="I'm Bla Bla"  //SE usa para poner apostofes
  console.log("productDescription",productDescription);
  let productPrice=100
  let isNew: boolean=false;


  const summary=`
  title:${productTitle}
  description: ${productDescription}
  price:${productPrice}
  isNew:${isNew}
  `

  console.log("summary",summary);

  const rta = 1 + '1';
  console.log("La respuesta es:",typeof(rta));


})();
