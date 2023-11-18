import _ from 'lodash'

const data =[
  {
    username:'Diego',
    role:'admin'
  },
  {
    username:'Valentina',
    role:'seller'
  },
  {
    username:'Andrea',
    role:'seller'
  },
  {
    username:'Andres',
    role:'customer'
  }
];

const rta=_.groupBy(data,(item=>item.role));
console.log(rta);
