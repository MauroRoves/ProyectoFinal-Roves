


// TIENDA








const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("contenedor-carrito")
let carrito = [];


productos.forEach((producto) => {
    const compra = document.createElement("div");
    compra.classList.add("producto")
    compra.innerHTML = `<img class="tamanioImgCarrito" src=${producto.img}
                        <p> Nombre: ${producto.nombre} </p>
                        <h3> id: ${producto.id} </h3>
                        <p> Precio: ${producto.precio} USD </p>

                        <button id="agregar${producto.id}">Agregar</button>`

    contenedorProductos.appendChild(compra);    
    
    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener(`click`, () => {
        agregarAlCarrito(producto.id)
    })
                    
})
 

const agregarAlCarrito = (prodId) => {
    const item = productos.find((el) => el.id === prodId);
    carrito.push(item);
    actualizarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito)
}




 const actualizarCarrito = () => {
    
    carrito.forEach((prodCarrito) => {
        const pCarrito = document.createElement('div');
        pCarrito.className = ('productoEnCarrito');
        pCarrito.innerHTML = `
        <p>${prodCarrito.nombre}</p>
        <p>Precio:$${prodCarrito.precio}</p>
        <button onclick="eliminarDelCarrito(${prodCarrito.id})" class="boton-eliminar"></button>
        `

        contenedorCarrito.appendChild(pCarrito);

        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
}
 


















































/* Productos.forEach(producto =>{
    const productoElegido = document.getElementById("producto-elegido");
})
 */



/* const card = document.getElementsByClassName("card");
const itemElegido = document.getElementsByClassName("itemElegido");





const botonComprar = document.getElementsByClassName("botones");


/* botonComprar[0].addEventListener(`click`, ()=>{
    buscarNombre("Torre de pisa")
});


 */

// GALERIA

/* const imgOver = document.getElementsByClassName("imagenesJS");


 for (const boton of botonComprar) {                                               
    boton.addEventListener ("click", ()=>{                                          
        let carrito = document.createElement("ul"); 
        Object.keys(Producto)
               
    })
}
 */







 

































/* alert("Retratos:" + "\n" + "\n" + "Torre de pisa - A4 - Fibra - 10 USD - Numero 1" + "\n" + "Puente Vasco da Gama - A4 - Fibra - 20 USD - Numero 2" + "\n" + "\n" +"Patron sobre lienzo - A3 - Oleo sobre lienzo - 30 USD - Numero 3" + "\n" + "Patron con anomalia - A3 - Acrilico - 15 USD - Numero 4" + "\n" + "\n" + "Viaje de Chihiro - 1/8 Watman - Fibra - 20 USD - Numero 5 " + "\n" + "Torre Eiffel - 1/8 Watman - Fibra - 15 USD - Numero 6");


let laminaElegida = parseInt(prompt("Ingrese el numero de lamina a Comprar"));



const a4Elegido = a4.find((el) => el.numero === laminaElegida);                                              
const a3Elegido = a3.find((el) => el.numero === laminaElegida);                                                         
const unOctavoWatmanElegido = unOctavoWatman.find((el) => el.numero === laminaElegida); 
const encuadre = [2, 3, 5]


if (laminaElegida <= 2) {
    alert("El precio de tu retrato es " + (a4Elegido.precio + encuadre[0]) + " USD");
    alert("Muchas Gracias");
} else if (laminaElegida <= 4) {
    alert("El precio de tu retrato es " + (a3Elegido.precio + encuadre[2]) + " USD");
    alert("Muchas Gracias");
} else if (laminaElegida <= 6){
    alert("El precio de tu retrato es " + (unOctavoWatmanElegido.precio + encuadre[1]) + " USD");
    alert("Muchas Gracias");
} else  
    alert("Ingrese un numero del 1 al 6");

 */