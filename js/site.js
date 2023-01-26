


const contenedor = document.querySelector("#contenedor")

let carrito = [];

stockProductos.forEach((prod) => {
    const {id, nombre, tamanio, precio, tecnica, img} = prod
    contenedor.innerHTML += `
                            <div class="card text-bg-dark border-dark mx-5" style="width: 14rem;">
                                    <img src="${img}" class="card-img-top border-dark rounded img-fluid" alt="torre de pizza">
                                    <div class="card-body">
                                        <h5 class="card-title">${nombre}</h5>
                                        <p class="card-text">Tecnica: ${tecnica}</p>
                                        <p class="card-text">Tamaño: ${tamanio}</p>
                                        <p class="card-text">Precio: ${precio}</p>
                                        <p class="card-text">Numero: ${id}</p>
                                        <button onclick ="agregarProducto(${id})" class="btn btn-outline-light botones">Comprar</a>
                                    
                                    </div>
                            </div>    
    `
})


function agregarProducto(id){
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item);
    mostrarCarrito();
}


 const mostrarCarrito = () => {
    const modalBody = document.querySelector(`.modal .modal-body`);
    
    carrito.forEach((prod) => {
        const {id, nombre, tamanio, precio, tecnica, img} = prod
        modalBody.innerHTML += `
                                <div class = "modal-contenedor">
                                <div>
                                    <img class="img-fluid" img-carrito" src="${img}"/>
                                </div>

                                <div>
                                <p>Producto: ${nombre}</p>
                                <p>Precio: ${precio}</p>
                                <p>Numero: ${id}</p>

                                <button class="btn btn-danger">Eliminar Producto</button>
                                </div>


                                

                                

        
        
        `
    })
}

























































































//PRYECTO ANTERIOR



/* 

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))






let boton = document.querySelector(".btn");
boton.addEventListener('click', () => {
   
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El archivo ha sido borrado'
            })
        }
    })
})

 */





 








/* 
productos.forEach((producto) => {
    const compra = document.querySelector(".card");
    const imgCompra = document.querySelector(".imgItem");
    imgCompra.classList.add("producto");

    contenedorProductos.appendChild(compra);    
    
    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener(`click`, () => {
        agregarAlCarrito(producto.id)
    })
                    
})
 */





/* const contenedorProductos = document.getElementById("contenedor-productos");
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




boton.addEventListener('click', () => {  
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El archivo ha sido borrado'
            })
        }
    })
})




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











 */
















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







 


























