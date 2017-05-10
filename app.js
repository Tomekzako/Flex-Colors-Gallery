document.addEventListener('DOMContentLoaded', function () {

    const blocks = document.querySelectorAll('.block');
    
    function openBlock() {
        this.classList.toggle('block__active');
    }
    
    blocks.forEach(block => block.addEventListener('click', openBlock));
    
    
    
    
    
});