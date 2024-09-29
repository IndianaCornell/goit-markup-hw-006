(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-burger-open]"),
      closeModalBtn: document.querySelector("[data-burger-close]"),
      modal: document.querySelector("[data-burger]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
  })();