(()=>{
  type Sizes='S'|'M'|'L'|'XL'
  type Product = {
    title:string,
    createdAt:Date,
    stock:number,
    size?: Sizes
  }

  const products:Product[]=[];


  const addProduct=(data:Product)=>{
    products.push(data)
  }

  addProduct({
    title:'pro1',
    createdAt: new Date(1993,1,1),
    stock:12
  })

  addProduct({
    title:'produ2',
    createdAt: new Date(1993,1,1),
    stock:15,
    size:'S'
  })
  // YA NO SE PUEDE POR QUE YA NO ES ANY
  //products.push(2323)
  //products.push('2323')
  products.push({
    title:'pro3',
    createdAt: new Date(2002,1,1),
    stock:1000,
    size:'L'
  }
  )
  console.log(products);




})();
