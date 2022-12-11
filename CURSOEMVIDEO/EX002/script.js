function verificar(){
    var fano = window.document.getElementById('itxtano')
    var sex = window.document.getElementsByName('sexo')
    var img = window.document.createElement('img')
    img.setAttribute('id','foto')
    var res = document.getElementById('res')
    data = new Date()
    var ano = data.getFullYear()
    
    if(fano.value.length == 0 || fano.value > ano ){
        res.innerHTML = '<br>Por favor, preencha os dados corretamente'
    }else{
        var genero = ''
        if(sex[0].checked){
            genero = 'Masculino'
        }else{
            genero = 'Feminino'
        }

    var idade = Number(ano) - Number(fano.value)
    
    if(idade<=12){
        res.innerHTML = `Detectamos Criança de ${idade} do sexo ${genero}`
        img.setAttribute('src','foto.jpg')  
        res.appendChild(img)       
    }    
    }
    
}


