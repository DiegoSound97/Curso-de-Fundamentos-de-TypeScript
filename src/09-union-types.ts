
(()=>{
//Hemos usado Union Types en la clase 07-arrays
//let userID:any;  //por que puede ser tanto un numero(int) o ud String
  let userID: string | number;  //por que puede ser tanto un numero(int) o un String
  userID=1212;
  userID='asd';

//como manejamos esto si qiueres utilizar un metodo para texto o numero?


  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);

    }else{
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('Diego');
  greeting(12.1212312);
})();
