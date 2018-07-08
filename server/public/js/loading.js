(function(){

    var content = document.querySelector('.content'),
        spinner = document.querySelector('.spinner');

    var showPage = function () {
        spinner.classList.add('close');
        setTimeout(function(){
            spinner.style.display = 'none';
            content.style.opacity = 1;
            content.classList.add('show');
            window.app = new App();
        }, 800)
    }

    window.onload = showPage

})()