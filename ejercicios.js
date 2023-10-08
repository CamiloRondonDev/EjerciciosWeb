//ejercicio 1
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal");
    const bntCalcular = document.querySelector(".bin-CalArea-modal");
    const modal = document.querySelector(".modal");

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
<<<<<<< HEAD
        var lado = parseInt(document.getElementById('lado').value);
=======
        // Obtén el valor del campo lado como texto
        const ladoInput = document.getElementById('lado');
        const mostrarResultado = document.getElementById('mostrar-resul');
        const ladoTexto = ladoInput.value;

        // Verifica si el campo lado está vacío
        if (ladoTexto === "") {
            alert("Por favor, ingrese un número.");
            return;
        }

        // Convierte el texto a un número entero
        const lado = parseInt(ladoTexto);

        // Verifica si el valor ingresado es un número válido
        if (isNaN(lado)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }

        // Verifica si el número ingresado es igual a cero
        if (lado === 0) {
            alert("La medida del cuadrado no puede ser cero.");
            return;
        }


>>>>>>> Style
        var resultado = lado * lado;
        document.getElementById('mostrar-resul').textContent = resultado
        ladoInput.value = "";
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

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var radio = parseInt(document.getElementById('radio').value); // toma el valor del input
        var resultado = Math.PI * Math.pow(radio, 2);
<<<<<<< HEAD
        document.getElementById('mostrar-resul2').textContent = resultado.toFixed(2)// muestra el resultado 
=======
        document.getElementById('mostrar-resul2').textContent = resultado.toFixed(2)// muestra el resultado
        document.getElementById('radio').value = "";
>>>>>>> Style
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

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var Fahrenheit = parseInt(document.getElementById('Fahrenheit').value); // toma el valor del input
        var resultado = ((Fahrenheit - 32) * 5) / 9
        document.getElementById('mostrar-resul3').textContent = resultado.toFixed(2)// muestra el resultado 
        document.getElementById('Fahrenheit').value = "";
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

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
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

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var num_1 = parseInt(document.getElementById('num3').value); // toma el valor del input
        var num_2 = parseInt(document.getElementById('num4').value); // toma el valor del input

        var restul = "El número más grande es : " + Math.max(num_1, num_2)
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

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
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

// ejercicio 7 
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal7");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal7");
    const bntCalcular = document.querySelector(".bin-CalArea-modal7");
    const modal = document.querySelector(".modal7");

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var n1 = parseInt(document.getElementById('N1').value); // toma el valor del input
        var n2 = parseInt(document.getElementById('N2').value); // toma el valor del input
        var n3 = parseInt(document.getElementById('N3').value); // toma el valor del input

        var restul = ""

        if (n1 >= n2 && n1 >= n3) {
            restul = n1;
        } else if (n2 >= n1 && n2 >= n3) {
            restul = n2;
        } else {
            restul = n3;
        }

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


    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var restul = "";

        for (i = 1; i < 8; i++) {
            restul += i + " ";
            console.log(i);
        }

        document.getElementById('mostrar-resul8').textContent = restul;  // muestra el resultado 
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

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var num1 = parseInt(document.getElementById('dato1').value); // toma el valor del input
        var num2 = parseInt(document.getElementById('dato2').value); // toma el valor del input

        if (num1 > num2) {
            resul = "el numero mas grande es el: " + num1;
            console.log("entro1")
        } else {
            resul = "el numero mas grande es el: " + num2;
            console.log("entro2")
        }
        document.getElementById('mostrar-resul9').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 10
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal10");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal10");
    const bntCalcular = document.querySelector(".bin-CalArea-modal10");
    const modal = document.querySelector(".modal10");
    var resul = ""
    var resul2 = ""

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var a = parseInt(document.getElementById('a').value); // toma el valor del input
        var b = parseInt(document.getElementById('b').value); // toma el valor del input
        var c = parseInt(document.getElementById('c').value); // toma el valor del input

        if (a == b || a == c || b == c) {
            alert("Hay al menos dos números iguales");
        } else {

            if (a >= b && a >= c) {
                resul = a;
            } else if (b >= a && b >= c) {
                resul = b;
            } else {
                resul = c;
<<<<<<< HEAD
=======
            }
        }

        if (a == b || a == c || b == c) {
            alert("Hay al menos dos números iguales");
        } else {

            if (a <= b && a <= c) {
                resul2 = a;
            } else if (b <= a && b <= c) {
                resul2 = b;
            } else {
                resul2 = c;
>>>>>>> Style
            }
        }


        document.getElementById('mostrar-resul10').textContent = " El mayor es " + resul   // muestra el resultado
        document.getElementById('mostrar-resul210').textContent = " El menor es " + resul2   // muestra el resultado  
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 11
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal11");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal11");
    const bntCalcular = document.querySelector(".bin-CalArea-modal11");
    const modal = document.querySelector(".modal11");
    var resul = "";


    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var arr1 = parseInt(document.getElementById('arr1').value); // toma el valor del input
        var arr2 = parseInt(document.getElementById('arr2').value); // toma el valor del input
        var arr3 = parseInt(document.getElementById('arr3').value); // toma el valor del input
        var arr4 = parseInt(document.getElementById('arr4').value); // toma el valor del input

        let arr = [arr1, arr2, arr3, arr4];


        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    //Intercambiar arr[j] y arr[j+1]
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        for (i = 0; i < 4; i++) {
            console.log(arr[i] + " " + i);
        }

        resul = `el numero más grande es: ${arr[arr.length - 1]} y el más bajo es: ${arr[0]}`  //` alt + 96 para sacar la comillita

        document.getElementById('mostrar-resul11').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 12
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal12");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal12");
    const bntCalcular = document.querySelector(".bin-CalArea-modal12");
    const modal = document.querySelector(".modal12");
    var resul = "";
    var contador = 0;


    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        for (i = 1; i <= 10; i++) {
            console.log(i);
            contador += i;
        }

        resul = `el la suma es: ${contador} `  //` alt + 96 para sacar la comillita

        document.getElementById('mostrar-resul12').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 13
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal13");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal13");
    const bntCalcular = document.querySelector(".bin-CalArea-modal13");
    const modal = document.querySelector(".modal13");
    var resul = "";
    var contador = 0;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        for (i = 1; i <= 100; i++) {
            //console.log(i);


            if ((i % 5) == 0) {
                console.log(i);
                contador += i;
            }
        }
        console.log(contador);

        resul = `el la suma de los multiplos de 5 es: ${contador} `  //` alt + 96 para sacar la comillita

        document.getElementById('mostrar-resul13').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 14
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal14");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal14");
    const bntCalcular = document.querySelector(".bin-CalArea-modal14");
    const modal = document.querySelector(".modal14");
    var resul = "";
    var contador = 0;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        for (i = 1; i <= 100; i++) {
            //console.log(i);


            if ((i % 2) == 0) {
                console.log(i);
                contador += i;
            }
        }
        console.log(contador);

        resul = `el la suma de los numeros pares es: ${contador} `  //` alt + 96 para sacar la comillita

        document.getElementById('mostrar-resul14').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 15
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal15");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal15");
    const bntCalcular = document.querySelector(".bin-CalArea-modal15");
    const modal = document.querySelector(".modal15");
    var resul = "";
    var contador = 0;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        for (i = 1; i <= 300; i++) {
            //console.log(i);

            if ((i % 2) == 0) {
                console.log(i);
                contador += 1;
            }
        }
        console.log(contador);

        resul = `existen ${contador} pares `  //` alt + 96 para sacar la comillita
        contador = 0;

        document.getElementById('mostrar-resul15').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 16
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal16");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal16");
    const bntCalcular = document.querySelector(".bin-CalArea-modal16");
    const modal = document.querySelector(".modal16");
    var resul = "";

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var catOpu = parseInt(document.getElementById('catOpu').value); // toma el valor del input
        var catAdy = parseInt(document.getElementById('catAdy').value); // toma el valor del input

        console.log("entro")
        resul = "La hipotenusa es de: " + Math.sqrt(Math.pow(catOpu, 2) + Math.pow(catAdy, 2));


        document.getElementById('mostrar-resul16').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 17
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal17");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal17");
    const bntCalcular = document.querySelector(".bin-CalArea-modal17");
    const modal = document.querySelector(".modal17");
    var resul = "";

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var rad = parseInt(document.getElementById('rad').value); // toma el valor del input
        var alt = parseInt(document.getElementById('alt').value); // toma el valor del input

        resul = 2 * Math.PI * rad * (rad + alt)
<<<<<<< HEAD

=======
>>>>>>> Style


        document.getElementById('mostrar-resul17').textContent = "El área es:" + resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 18
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal18");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal18");
    const bntCalcular = document.querySelector(".bin-CalArea-modal18");
    const modal = document.querySelector(".modal18");
    var resul = "";

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var numCual = parseInt(document.getElementById('numCual').value); // toma el valor del input

        if ((numCual % 2) == 0) {
            console.log("par");
            resul = `El número ${numCual} es par`;
        } else {
            console.log("impar");
            resul = `El número ${numCual} es impar`;
        }

        document.getElementById('mostrar-resul18').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 19 --PENDIENTE POR TERMINAR 
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal19");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal19");
    const bntCalcular = document.querySelector(".bin-CalArea-modal19");
    const modal = document.querySelector(".modal19");
    var resul = "";
    let numeros = [];

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        let numero = parseInt(document.getElementById('numero').value);
        if (!isNaN(numero)) {
            if (numeros.length < 10) {
                numeros.push(numero);
                console.log(numeros);
            } else {
                alert('Ya ha ingresado 10 números.');
            }
        } else {
            alert('Por favor, ingrese un número válido.');
        }

        for (i = 0; i < 10; i++) {
            console.log(numeros[i]);

        }

        document.getElementById('mostrar-resul19').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
});

// ejercicio 20
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal20");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal20");
    const bntCalcular = document.querySelector(".bin-CalArea-modal20");
    const modal = document.querySelector(".modal20");
    var resul = "";
    var numeros = [];

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var nume1 = parseInt(document.getElementById('nume1').value); // toma el valor del input
        var nume2 = parseInt(document.getElementById('nume2').value); // toma el valor del input

        if (nume1 > nume2) {       //mayor N1
            numeros.push(nume2);
            numeros.push(nume1);
        } else if (nume2 > nume1) { //mayor N2
            numeros.push(nume1);
            numeros.push(nume2);
        } else {                  //iguales
            numeros.push(nume2);
            numeros.push(nume1);
        }

        console.log(numeros[0]);
        console.log(numeros[1]);

        document.getElementById('mostrar-resul20').textContent = numeros   // muestra el resultado 
        numeros.splice(0, numeros.length);
        document.getElementById('nume1').value = "";
        document.getElementById('nume2').value = "";

    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");

    });
<<<<<<< HEAD
});

// ejercicio 21
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal21");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal21");
    const bntCalcular = document.querySelector(".bin-CalArea-modal21");
    const modal = document.querySelector(".modal21");

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var resul = "";

        for (var i = 0; i < 11; i++) {

            if ((i % 2) == 0) {
                console.log(i);
                resul = `${resul}  ${i} -`
            }
        }
        document.getElementById('mostrar-resul21').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

// ejercicio 22
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal22");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal22");
    const bntCalcular = document.querySelector(".bin-CalArea-modal22");
    const modal = document.querySelector(".modal22");
    const horas = 5;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {
        var resul = "";

        resul = `5 Horas tiene ${horas * 60} minutos`



        document.getElementById('mostrar-resul22').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

// ejercicio 23
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal23");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal23");
    const bntCalcular = document.querySelector(".bin-CalArea-modal23");
    const modal = document.querySelector(".modal23");
    var resul = "";
    var priHora = 3000;
    var otrHoras = 2000;


    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var horas = parseInt(document.getElementById('horas').value); // toma el valor del input
        console.log(horas);

        if (horas == 1) {
            resul = horas * priHora;
        } else {
            var calculo = (horas - 1) * otrHoras + priHora;
            resul = `por ${horas} horas el total a pagar es de:  ${calculo}`
        }


        document.getElementById('mostrar-resul23').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

// ejercicio 24
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal24");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal24");
    const bntCalcular = document.querySelector(".bin-CalArea-modal24");
    const modal = document.querySelector(".modal24");
    var resul = "";
    var calculo;
    var valorEntrada = 10000;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var entradas = parseInt(document.getElementById('entradas').value); // toma el valor del input
        console.log(horas);

        if (entradas > 4) {
            alert("solo se pueden hasta 4 entradas");
            document.getElementById('entradas').value = "";
        } else {
            switch (entradas) {
                case 1:
                    calculo = entradas * valorEntrada;
                    resul = `El valor de la entrada es de ${calculo}`;
                    break;
                case 2:
                    calculo = (entradas * valorEntrada) - (entradas * valorEntrada) * 0.10;
                    resul = `El valor de la entrada es de ${calculo}`;
                    break;
                case 3:
                    calculo = (entradas * valorEntrada) - (entradas * valorEntrada) * 0.15;
                    resul = `El valor de la entrada es de ${calculo}`;
                    break;
                case 4:
                    calculo = (entradas * valorEntrada) - (entradas * valorEntrada) * 0.20;
                    resul = `El valor de la entrada es de ${calculo}`;
                    break;
            }
        }



        document.getElementById('mostrar-resul24').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

// ejercicio 25
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal25");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal25");
    const bntCalcular = document.querySelector(".bin-CalArea-modal25");
    const modal = document.querySelector(".modal25");
    var resul = "";
    var calculo;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var velocidad = parseInt(document.getElementById('velocidad').value); // toma el valor del input
        console.log(velocidad);

        calculo = ((velocidad * 1000) / 1) / 3600;
        resul = `la velocidad en M/S es de: ${calculo.toFixed(2)}`;

        document.getElementById('mostrar-resul25').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

// ejercicio 25
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal25");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal25");
    const bntCalcular = document.querySelector(".bin-CalArea-modal25");
    const modal = document.querySelector(".modal25");
    var resul = "";
    var calculo;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var velocidad = parseInt(document.getElementById('velocidad').value); // toma el valor del input
        console.log(velocidad);

        calculo = ((velocidad * 1000) / 1) / 3600;
        resul = `la velocidad en M/S es de: ${calculo.toFixed(2)}`;

        document.getElementById('mostrar-resul25').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

// ejercicio 26
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector(".bin-abrir-modal26");
    const bntCerrarmodal = document.querySelector(".bin-cerrar-modal26");
    const bntCalcular = document.querySelector(".bin-CalArea-modal26");
    const modal = document.querySelector(".modal26");
    var resul = "";
    var calculo;

    bntAbrirmodal.addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntCalcular.addEventListener("click", () => {

        var nombre = document.getElementById('nombre').value; // toma el valor del input
        var nota1 = parseInt(document.getElementById('nota1').value); // toma el valor del input
        var nota2 = parseInt(document.getElementById('nota2').value); // toma el valor del input
        var nota3 = parseInt(document.getElementById('nota3').value); // toma el valor del input
        console.log(nombre);
        console.log(nota1);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nombre == "") {
            alert("ingrese todos los datos");

        } else {

            if (nota1 > 5 || nota1 < 0 || nota2 > 5 || nota2 < 0 || nota3 > 5 || nota3 < 0) {
                alert("Las notas son mínimo de 0 y máxima es de 5.0");
            } else {
                calculo = (nota1 * 0.33) + (nota2 * 0.33) + (nota3 * 0.34);
            }

        }

        if (calculo > 3) {
            resul = `Señor ${nombre} su nota definitiva es de ${calculo} aprobo la materia`;

        } else {
            resul = `Señor ${nombre} su nota definitiva es de ${calculo} reprobo la materia`;
        }

        document.getElementById('mostrar-resul26').textContent = resul   // muestra el resultado 
    })
    bntCerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});

=======
});
>>>>>>> Style
