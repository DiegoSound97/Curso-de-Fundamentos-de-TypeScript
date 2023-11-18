(()=>{
  const calcTotal=(prices: number[]): string=>{
    let total=0;
    prices.forEach((item) => {
      total+=item;
    });
    return total.toString();
  }

  const printTotal=(prices: number[])=>{
    const rta =calcTotal(prices)
    console.log(`El Total es: ${rta}`);
    // return rta;  Si pongo return el motor de inferencia me diria que es un string
  }

printTotal([1,2,1,1,1])  // No retorna nada, por ende es un void

})();
