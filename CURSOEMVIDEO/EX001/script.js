function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sct = window.document.getElementById('section')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Agora são exatamente ${hour} horas`

    if (hour>=0 && hour<=12) {
        img.src = 'imagens/manha.jpg'
    } else if (hour>=12 && hour <18){
        img.src = 'imagens/tarde.jpg'
    }else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'grey'
    }

    }

