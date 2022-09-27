const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    btnOpen: document.querySelector('.btn'),
    btnClose: document.querySelector('.modal button.close'),
    
    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnOpen.onclick = () => {
    Modal.open()
}

Modal.btnClose.onclick = () => {
    Modal.close()}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    if(event.key === 'Escape'){
        Modal.close()
    }
}