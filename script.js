"use strict"

var cadenaNombres=[];

var nodoH2Casilla;

var nodoCasilla;

var nodoDivMemoria;




function pintaYdevuelveNombre(){
    
    let nombreIntro=introduceNombre.value;

    nodoH2Casilla=document.createElement("h2");
    
    nodoH2Casilla.innerHTML=nombreIntro;

    nodoCasilla=document.createElement("div");

    nodoCasilla.classList.add("casilla");

    nodoCasilla.append(nodoH2Casilla);

    nodoDivMemoria=document.querySelector("#memoria");

    nodoDivMemoria.append(nodoCasilla);

    return nombreIntro;

}







var nodoBtnanadir=document.querySelector("#anadir");

nodoBtnanadir.addEventListener("click",function(){

    var nombreCadenaIntroducido = pintaYdevuelveNombre()

    cadenaNombres.push( nombreCadenaIntroducido );



});









var nodoBtnsorteo=document.querySelector("#sorteo");


nodoBtnsorteo.addEventListener("click",function(){

    
    let nodoDivSorteo=document.querySelectorAll(".casilla");
    
    

    let contador=0;

   

    let miContadorColor=setInterval(function(){

        

        let numero_aleatorioColor=Math.random();

        let numero_finalColor=numero_aleatorioColor*cadenaNombres.length

        let numeroSinDecimalUno=Math.trunc(numero_finalColor);

        

        

        for(let i=0; i<cadenaNombres.length; i++ ){
                
            nodoDivSorteo[i].classList.remove("elegido");

            if( i==numeroSinDecimalUno ){

                    
                    
                nodoDivSorteo[i].classList.add("elegido");

                

        }

        

        contador++;

        

         if( contador==35 ){


            clearInterval(miContadorColor);
            

        }

    }
        

    },100);

});