// function calcularPreciofinal(precio,iva){
    // return precio+(precio*iva/100)
// }

// let precio= parseFloat (prompt ("Ingresar precio championes: "));

// let iva= 22;
// let precioTotal= calcularPreciofinal( precio, iva);

// alert ("El precio final es : "+ precioTotal)

const calzado = [
{ id:2 , nombre:"Nike Mercurial" ,precio:5500},
{ id:3 , nombre:"Nike Tiempo Emerald" ,precio:4500}
] 

const productoBuscado= prompt (" Que calzado deseas buscar?");

const productoEncontrado= calzado.find (producto => producto.nombre.toLocaleLowerCase()=== productoBuscado.toLocaleLowerCase());

if (productoEncontrado){
    alert (`El precio del calzado es ${productoEncontrado.precio}`);
} else {
    alert("Precio no encotrado");

}












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








