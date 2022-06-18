const jsimagengrande = document.querySelector('.js_imagengrande')
const tumbl = document.querySelectorAll('.tubnlimg')

tumbl.forEach(thumb => {
    thumb.addEventListener('click', function(){
        jsimagengrande.src = this.src
    })
})