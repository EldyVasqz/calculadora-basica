function calculadora(operacion, num1, num2) { 
    switch(operacion) { 
        case "suma": 
            return num1 + num2;
        case "resta": 
            return num1 - num2; 
        case "multiplicacion":
            return num1 * num2;           
        case "division": 
            if (num2 === 0) { 
                return "Error: División por cero"; 
            } 
            return num1 / num2; 
        default: 
            return "Operación no válida"; 
    } 
}

console.log(calculadora("suma", 5, 3));        
console.log(calculadora("resta", 10, 4));     
console.log(calculadora("multiplicacion", 6, 2)); 
console.log(calculadora("division", 8, 0));    
console.log(calculadora("potencia", 2, 3));   
