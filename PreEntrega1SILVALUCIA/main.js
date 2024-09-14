function calcularPreciofinal(precio,iva){
    return precio+(precio*iva/100)
}

let precio= parseFloat (prompt ("Ingresar precio producto: "));

let iva= 22;
let precioTotal= calcularPreciofinal( precio, iva);

alert ("El precio final es : "+ precioTotal)