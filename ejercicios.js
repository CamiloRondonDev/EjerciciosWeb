//ejercicio 1
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal");
    const bntCalcular = document.querySelector(".bin-CalArea-modal");
    const modal = document.querySelector(".modal");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var lado = parseInt(document.getElementById('lado').value);
        var resultado = "El área de este cuadro es de: " + lado * lado;
        document.getElementById('mostrar-resul').textContent = resultado
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});


// ejercicio 2 
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal2");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal2");
    const bntCalcular = document.querySelector(".bin-CalArea-modal2");
    const modal = document.querySelector(".modal2");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var radio = parseInt(document.getElementById('radio').value); // toma el valor del input
        var resultado = Math.PI * Math.pow(radio,2);
        document.getElementById('mostrar-resul2').textContent = resultado.toFixed(2)// muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});

// ejercicio 3
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal3");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal3");
    const bntCalcular = document.querySelector(".bin-CalArea-modal3");
    const modal = document.querySelector(".modal3");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var Fahrenheit = parseInt(document.getElementById('Fahrenheit').value); // toma el valor del input
        var resultado = ((Fahrenheit - 32) * 5 ) / 9
        document.getElementById('mostrar-resul3').textContent = resultado.toFixed(2)// muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});

// ejercicio 4
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal4");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal4");
    const bntCalcular = document.querySelector(".bin-CalArea-modal4");
    const modal = document.querySelector(".modal4");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var num_1 = parseInt(document.getElementById('num1').value); // toma el valor del input
        var num_2 = parseInt(document.getElementById('num2').value); // toma el valor del input
        var suma = num_1 + num_2;
        var resta = num_1 - num_2;
        var restul = "la sumas de los números es " + suma + " la resta es: " + resta
        document.getElementById('mostrar-resul4').textContent = restul   // muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});

// ejercicio 5
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal5");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal5");
    const bntCalcular = document.querySelector(".bin-CalArea-modal5");
    const modal = document.querySelector(".modal5");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var num_1 = parseInt(document.getElementById('num3').value); // toma el valor del input
        var num_2 = parseInt(document.getElementById('num4').value); // toma el valor del input
    
        var restul = "El número más grande es : " + Math.max(num_1,num_2)
        document.getElementById('mostrar-resul5').textContent = restul   // muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});

// ejercicio 6
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal6");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal6");
    const bntCalcular = document.querySelector(".bin-CalArea-modal6");
    const modal = document.querySelector(".modal6");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var base = parseInt(document.getElementById('base').value); // toma el valor del input
        var altura = parseInt(document.getElementById('altura').value); // toma el valor del input
    
        var restul = base * altura / 2 
        document.getElementById('mostrar-resul6').textContent = restul   // muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
        document.getElementById('altura').value = ""
        document.getElementById('base').value = ""
       modal.removeAttribute("open");
    
    });
});

// ejercicio 7 -- pendiente por desarrollar
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal7");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal7");
    const bntCalcular = document.querySelector(".bin-CalArea-modal7");
    const modal = document.querySelector(".modal7");

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var n1 = parseInt(document.getElementById('N1').value); // toma el valor del input
        var n2 = parseInt(document.getElementById('N2').value); // toma el valor del input
        var n3 = parseInt(document.getElementById('N3').value); // toma el valor del input
    
        var restul = ""
        document.getElementById('mostrar-resul7').textContent = restul   // muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});

// ejercicio 8 
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal8");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal8");
    const bntCalcular = document.querySelector(".bin-CalArea-modal8");
    const modal = document.querySelector(".modal8");
  

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", ()=>{
        var restul = "";
    
        for(i = 1 ; i<8 ; i++){
            restul += i + " ";
            console.log(i);
        }
     
        document.getElementById('mostrar-resul8').textContent = restul ;  // muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
        document.getElementById('mostrar-resul8').textContent = "";
       modal.removeAttribute("open");
    
    });
});

// ejercicio 9
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal9");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal9");
    const bntCalcular = document.querySelector(".bin-CalArea-modal9");
    const modal = document.querySelector(".modal9");
    var resul = ""

    bntAbrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });8

    bntCalcular.addEventListener("click", ()=>{
        var num1 = parseInt(document.getElementById('dato1').value); // toma el valor del input
        var num2 = parseInt(document.getElementById('dato2').value); // toma el valor del input
    
        if(num1 > num2){
            resul = "el numero mas grande es el: " + num1 ;
            console.log("entro1")
        }else{
            resul = "el numero mas grande es el: " + num2 ;
            console.log("entro2")
        }
        
        document.getElementById('mostrar-resul9').textContent = resul   // muestra el resultado 
    })

    bntCerrarmodal.addEventListener("click", () => {
       modal.removeAttribute("open");
    
    });
});