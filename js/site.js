


let carrito = [];

const contenedor = document.querySelector("#contenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const procesarCompra = document.querySelector("#procesarCompra");



function cargarUsuarios(){
    fetch("/json/productos.json")
        .then(resp => resp.json())
        .then(stockProductos => {
            stockProductos.forEach(prod => {
            const {id, nombre, tamanio, precio, tecnica, img} = prod;
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
        })

}

cargarUsuarios();



/* stockProductos.forEach((prod) => {
    const {id, nombre, tamanio, precio, tecnica, img} = prod;
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
}) */



document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
}); 


procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });



vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    mostrarCarrito();
})




document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
}); 

//Busco los productos para agregar al carrito

function agregarProducto(id){
    
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item);
    mostrarCarrito();
}

//Muestro los productos seleccionados en un modal de bootstrap

 const mostrarCarrito = () => {
    const modalBody = document.querySelector(`.modal .modal-body`);
    
    modalBody.innerHTML = ""
    carrito.forEach((prod) => {
        const {id, nombre, precio, img} = prod
        modalBody.innerHTML += `
                                <div class = "modal-contenedor">
                                    <div>
                                        <img class="img-fluid" img-carrito" src="${img}"/>
                                    </div>

                                    <div>
                                    <p>Producto: ${nombre}</p>
                                    <p>Precio: ${precio}</p>
                                    <p>Numero: ${id}</p>

                                    <button onclick="eliminarProducto(${id})"class="btn btn-danger">Eliminar Producto</button>
                                    </div>
                                </div>
                                 `
    })

    if(carrito.length === 0) {
        modalBody.innerHTML = `
                                <p class="text-center parrafo"> No agregaste nada`
    }

    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio, 0)
    
    guardarEnStorage()


}

//Funcionalidad al boton de eliminar producto del carrito

function eliminarProducto (id){
    const laminaId = id;
    carrito = carrito.filter((lamina) => lamina.id !== laminaId);
    mostrarCarrito();

}

//Funcion para guardar en el local Storage

function guardarEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



















 


























