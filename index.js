//EJERCICIO 1

//const primeraCancion = prompt ("dime una canción")

//const segundaCancion = prompt ("dime otra canción")

//const terceraCancion = prompt ("dime otra canción")

//const cuartaCancion = prompt ("dime otra canción")

//const quintaCancion = prompt ("dime otra canción")

//const objetoLista = document.getElementById("listaDecanciones1")
//objetoLista.textContent = primeraCancion

//const objetoLista2 = document.getElementById("listaDecanciones2")
//objetoLista2.textContent = segundaCancion

//const objetoLista3 = document.getElementById("listaDecanciones3")
//objetoLista3.textContent = terceraCancion

//const objetoLista4 = document.getElementById("listaDecanciones4")
//objetoLista4.textContent = cuartaCancion

//const objetoLista5 = document.getElementById("listaDecanciones5")
//objetoLista5.textContent = quintaCancion

//EJERCICIO 2

const correcto= document.getElementById("boton1")

const flaso1= document.getElementById("boton2")

const falso2= document.getElementById("boton3")

const mensaje= document.getElementById ("mensaje")

correcto.onclick = () => {
    mensaje.textContent = "Correcto! Lo lograste"
    boton1.classList.add ("boton4")
}

flaso1.onclick = () => {
    mensaje.textContent = "Le erraste, suerte para la próxima pepo"
    boton1.classList.add ("boton4")
    boton2.classList.add ("boton5")
    boton3.classList.add ("boton5")
}