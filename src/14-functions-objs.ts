(()=>{
  console.log('HOLA');

  const login=(data:{email:string,password:number})=>{
    console.log(data.email,data.password);
  }

  login({
    email:'Diego@gmail.com',
    password:12121212

  });

  type Sizes='S'|'M'|'L'|'XL'
  const products:any[]=[];


  const addProduct=(data:{
    title:string,
    createdAt:Date,
    stock:number,
    size?: Sizes
  })=>{
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
  console.log(products);


})();
