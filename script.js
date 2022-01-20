function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    

    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        foto.src = 'img/manha1.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        foto.src = 'img/tarde1.png'
        document.body.style.background ='#b9846f'
    } else {
        foto.src = 'img/noite1.png'
        document.body.style.background ='#515154 '
    }

}
