

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




//Comienzo del simulador
let nombre = prompt("Ingrese su nombre")
alert(`Bienvenido a la tienda ${nombre}!`)

let carrito = prompt("Elija que prenda quiere llevar: (remera, jean, campera, zapatillas o medias)").toLowerCase()
while(carrito != "salir"){
    switch(carrito){
        case "remera":
            alert(`El precio de su producto es $${precioFinal(remera.precio)}`)
            break
        case "jean":
            alert(`El precio de su producto es $${precioFinal(jean.precio)}`)
            break
        case "campera":
            alert(`El precio de su producto es $${precioFinal(campera.precio)}`)
            break
        case "zapatillas":
            alert(`El precio de su producto es $${precioFinal(zapatillas.precio)}`)
            break
        case "medias":
            alert(`El precio de su producto es $${precioFinal(medias.precio)}`)
            break
        default:
            alert("Lo siento, ese producto no se encuentra en la tienda")
            break
        }
    carrito = prompt("Elija otro producto que desee (remera, jean, campera, zapatillas o medias) o escriba salir")
}


alert("Gracias por visitar nuestra tienda, ojala vuelva pronto")




