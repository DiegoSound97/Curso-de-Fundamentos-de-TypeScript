(()=>{
//let myNumber: number;
//let myNumber: number=undefined;  //No se puede asignar undefined o null

//let myString: string;
//let myString: string=null;
  let myNull:null=null;
  let myUndefined: undefined=undefined;
// NO SE PUEDE
//myNull=12;
//myNull='12';

  let myNumber: number|null=null;
  myNumber=12;

  let myString: string|undefined=undefined;
  myString='12';

  function hi(name:string|null){
    let hello='Hola ';
    if (name){
      hello+=name.toLowerCase();
    }else{
      hello+='nobody'
    }
    console.log(hello);

  }

  function hiV2(name:string|null){
    let hello='Hola ';
    hello+=name?.toLowerCase() || 'nobody';
    console.log(hello);

  }
  hi('Nicolas')
  hi(null)

  hiV2('Diego')
  hiV2(null)

})();
