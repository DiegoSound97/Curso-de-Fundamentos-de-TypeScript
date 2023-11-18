(()=>{
  type UserID= string | number;
  let userID: UserID;  //por que puede ser tanto un numero(int) o un String


  // Literal types
  type Sizes='S'|'M'|'L'|'XL'
  let shirtSize: Sizes;
  shirtSize='M'
  shirtSize='L'
  shirtSize='XL'
  shirtSize='S'


  function greeting(userID: UserID, size:Sizes){
    if(typeof userID === 'string'){
      console.log(`string ${userID.toLowerCase()}`);

    }
  }
greeting(1111,'S')
greeting('1111','L')

})()
