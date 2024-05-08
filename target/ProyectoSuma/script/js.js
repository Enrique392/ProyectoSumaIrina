let salir=document.querySelector("#salir")
salir.addEventListener("click",(Event)=>{
    let confirmacion=confirm("Estas seguro de salir de la APP???")
    if (confirmacion){
        window.location.replace("https://www.google.com/?hl=es")
    }

});





function mostrarNumeros() {

    operando1 = document.querySelector("#operando1");
    operando2 = document.querySelector("#operando2");
    operando1.value = parseInt(Math.random() * 100 + 1);
    operando2.value = parseInt(Math.random() * 100 + 1);
    let operacio=document.querySelector()


    sumaCorrecta = Number(operando1.value) + Number(operando2.value);

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


let radios=document.querySelectorAll('input[type=radio][name="operacion"]');
radios.forEach(function (radio){
    if (this.checked){
        console.log("Radio seleccionado",this.value);
        let operaciones=this.value;
        mostrarNumeros(operaciones);
        window.location.replace("operaciones.jsp")
    }
})

