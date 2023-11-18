(()=>{
  let myDynamicVar:any;

  // Con any se quita el analisis de tipos en una variable
  // Ejemplo con la variable myDinamicVar
  // Se recomienda mucho no usar el any
  myDynamicVar=100
  myDynamicVar=null
  myDynamicVar={}
  myDynamicVar=''

  // Se puede castear de ambas maneras
  myDynamicVar='Hola';
  const rta=(myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar=1212;
  const rta2=(<number>myDynamicVar).toFixed();
  console.log(rta2);

})();
