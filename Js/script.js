function mostrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (localStorage.fechaModal !== modalId) {

        if (modal) {
            modal.classList.add("mostrar");
            modal.addEventListener("click", (e) => {
                if (e.target === modalId || e.target.className === "fechar") {
                    modal.classList.remove("mostrar");
                    localStorage.fechaModal = modalId;

                }

            })
        }
    }

}
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    mostrarModal("modal-promocao");


});