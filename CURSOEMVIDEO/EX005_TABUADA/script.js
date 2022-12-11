function gerar(){
    var n = document.getElementById('inum')
    let s = document.getElementById('isel')

    if(n.value > 0 && n.value <= 10){
        var num = Number(n.value)
        for(var i = 1; i<=10; i++){
            s.setAttribute('size','10')
            var opt = document.createElement('option')
            opt.text = `${num} * ${i} = ${num*i}`
            s.appendChild(opt)
        }
    }else{
        alert('Preencha com um numero entre maior que zero e menor que 10')
    }


}