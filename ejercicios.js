
document.addEventListener("DOMContentLoaded", () => {
    const bntabrirmodal = document.querySelector("#bin-abrir-modal");
    const bntcerrarmodal = document.querySelector("#bin-cerrar-modal");
    const modal = document.querySelector("#modal");

    bntabrirmodal .addEventListener("click", () => {
        modal.setAttribute("open", "true");
    });

    bntcerrarmodal.addEventListener("click", () => {
        modal.removeAttribute("open");
    });
});