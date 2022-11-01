function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    function sumar(secondNum) {
      if (secondNum) {
        return console.log(secondNum + firstNum); 
      }
      return console.log(firstNum);
    }
    return sumar;
  }
  
sumWithClosure(290)();