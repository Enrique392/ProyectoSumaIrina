function mostrarNumeros() {

    sumando1 = document.querySelector("#sumando1");
    sumando2 = document.querySelector("#sumando2");
    sumando1.value = parseInt(Math.random() * 100 + 1);
    sumando2.value = parseInt(Math.random() * 100 + 1);
    sumaCorrecta = Number(sumando1.value) + Number(sumando2.value);

}




let contadorC=0;
let contadorI=0;
let racha=0;
let respuesta = document.querySelector("#resultado");
respuesta.addEventListener("change",(event) => {
    console.log(typeof (respuesta.value));
    if (sumaCorrecta === Number(respuesta.value)) {
        contadorC++
        racha++
        mostrarNumeros();
    } else {
        contadorI++;
        racha=0
        mostrarNumeros();
    }

    if (racha===10)
        alert("¡RACHA DE 10! ¡SIGUE ASI!")




    respuesta.value="";
    document.querySelector("#correcta").innerHTML=contadorC;
    document.querySelector("#incorrecta").innerHTML=contadorI;
});

let salir=document.querySelector("#salir")
salir.addEventListener("click",(Event)=>{
    let confirmacion=confirm("Estas seguro de salir de la APP???")
    if (confirmacion){
        window.location.replace("https://www.google.com/?hl=es")
    }

});
