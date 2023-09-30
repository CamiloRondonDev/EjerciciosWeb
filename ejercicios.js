
document.addEventListener("DOMContentLoaded", () => {
    const bntAbrirmodal = document.querySelector("#bin-abrir-modal");
    const bntCerrarmodal = document.querySelector("#bin-cerrar-modal");
    const bntCalcular = document.querySelector("#bin-CalArea-modal");
    const modal = document.querySelector("#modal");

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