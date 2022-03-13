export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper');

    // Selecionando o botão cancelar
    const cancelButton = document.querySelector('.button.cancel');

    // Escutando o evento no botão cancel
    cancelButton.addEventListener('click', close);

    // Abrir a modal
    function open() {
        // Atribuindo a classe active para o modal
        modalWrapper.classList.add('active');
    }

    // Fechar a modal
    function close() {
        // Removendo a classe active do modal
        modalWrapper.classList.remove('active');
    }

    return {open, close}
}