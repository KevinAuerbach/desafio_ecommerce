

//funciones que voy a utilizar
function precioFinal(producto){
     return producto + (producto*21/100)
}

//creo la clase de los productos que vendo
class producto {
    constructor(prenda,color,precio){
        this.prenda = prenda
        this.color = color
        this.precio = precio
    }
}
let remera = new producto("remera","blanco",2500)
let jean = new producto("jean","azul",8000)
let campera = new producto("campera","negro",10600)
let zapatillas = new producto("zapatillas","rojo",15000)
let medias = new producto("medias","negro",1500)


//array de productos
let productos = [
    {prenda:"remera", color:"blanco", precio:2500},
    {prenda:"jean", color:"azul", precio:8000},
    {prenda:"campera", color:"negro", precio: 10600},
    {prenda:"zapatillas", color:"rojo", precio:15000},
    {prenda:"medias", color:"negro", precio:1500}
]

let carritoUsuario = []


//Comienzo del simulador
let nombre = prompt("Ingrese su nombre")
alert(`Bienvenido a la tienda ${nombre}!`)

let carrito = prompt("Elija que prenda quiere llevar: (remera, jean, campera, zapatillas o medias)").toLowerCase()
while(carrito != "salir"){
    switch(carrito){
        case "remera":
            carrito = prompt(`El precio de su producto es $${precioFinal(remera.precio)}, desea agregar al carrito (si o no)?`).toLowerCase()
            if(carrito == "si"){carritoUsuario.push(remera)}
            break
        case "jean":
            carrito = prompt(`El precio de su producto es $${precioFinal(jean.precio)}, desea agregar al carrito (si o no)?`).toLowerCase()
            if(carrito == "si"){carritoUsuario.push(jean)}
            break
        case "campera":
            carrito = prompt(`El precio de su producto es $${precioFinal(campera.precio)}, desea agregar al carrito (si o no)?`).toLowerCase()
            if(carrito == "si"){carritoUsuario.push(campera)}
            break
        case "zapatillas":
            carrito = prompt(`El precio de su producto es $${precioFinal(zapatillas.precio)}, desea agregar al carrito (si o no)?`).toLowerCase()
            if(carrito == "si"){carritoUsuario.push(zapatillas)}
            break
        case "medias":
            carrito = prompt(`El precio de su producto es $${precioFinal(medias.precio)}, desea agregar al carrito (si o no)?`).toLowerCase()
            if(carrito == "si"){carritoUsuario.push(medias)}
            break
        default:
            alert("Lo siento, ese producto no se encuentra en la tienda")
            break
        }
    carrito = prompt("Elija otro producto que desee (remera, jean, campera, zapatillas o medias) o escriba salir")
}
let total = carritoUsuario.reduce((acc,prod) => acc + prod.precio, 0)

alert(`Su carrito tiene ${carritoUsuario.length} productos y el total de su compra es $${precioFinal(total)}`)
carrito = prompt("1: confirmar compra, 2: vaciar carrito y salir")
if(carrito === "1"){
    alert("Gracias por su compra!, vuelva pronto")
}else if(carrito === "2"){
    carritoUsuario.splice(0,carritoUsuario.length)
    alert("Gracias por visitarnos, vuelva pronto!")
}







