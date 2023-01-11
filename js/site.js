

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







 


























