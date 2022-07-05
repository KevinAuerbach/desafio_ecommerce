//Declaracion de variables
let remera = 2500
let jean = 8000
let campera = 10600
let zapatillas = 15000
let medias = 1500

//funcion que voy a utilizar
function precioFinal(producto){
     return producto + (producto*21/100)
}


//Comienzo del simulador
let nombre = prompt("Ingrese su nombre")
alert(`Bienvenido a la tienda ${nombre}!`)

let carrito = prompt("Elija que prenda quiere llevar: (remera, jean, campera, zapatillas o medias)").toLowerCase()
while(carrito != "salir"){
    switch(carrito){
        case "remera":
            alert(`El precio de su producto es $${precioFinal(remera)}`)
            break
        case "jean":
            alert(`El precio de su producto es $${precioFinal(jean)}`)
            break
        case "campera":
            alert(`El precio de su producto es $${precioFinal(campera)}`)
            break
        case "zapatillas":
            alert(`El precio de su producto es $${precioFinal(zapatillas)}`)
            break
        case "medias":
            alert(`El precio de su producto es $${precioFinal(medias)}`)
            break
        default:
            alert("Lo siento, ese producto no se encuentra en la tienda")
            break
        }
    carrito = prompt("Elija otro producto que desee (remera, jean, campera, zapatillas o medias) o escriba salir")
}
alert("Gracias por visitar nuestra tienda, ojala vuelva pronto")


