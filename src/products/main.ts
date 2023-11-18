import{createProduct,calcStock,products} from './product.service';

createProduct({
  name:'pro1',
  createdAt: new Date(1993,1,1),
  stock:5
})

createProduct({
  name:'produ2',
  createdAt: new Date(1993,1,1),
  stock:6,
  size:'S'
})
console.log(products);
const total=calcStock();
console.log(total);

