function calcularPreciofinal(precio,iva){
    return precio+(precio*iva/100)
}

let precio= parseFloat (prompt ("Ingresar precio championes: "));

let iva= 22;
let precioTotal= calcularPreciofinal( precio, iva);

alert ("El precio final es : "+ precioTotal)










/*let precio= prompt ("Ingresar precio del calzado elegido: ");

switch(precio){
    case "Nike Mercurial":
        Nike Mercurial()
        break; 
    case "Nike Tiempo Emerald":
        Nike Tiempo Emerald()
        break; 

        function calcularPreciofinal(precio,iva){
            return precio+(precio*iva/100)
    
        }

let iva= 22;

let precioTotal= calcularPreciofinal( precio, iva);

alert ("El precio a abonar es : "+ precioTotal) */








