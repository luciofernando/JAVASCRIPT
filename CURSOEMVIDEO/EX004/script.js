function contar(){

    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var pass = document.getElementById('ipasso')
    var res = document.getElementById('res')

    var inicial = parseInt(ini.value)
    var final = parseInt(fim.value)
    var passo = parseInt(pass.value)
    
    if(inicial == 0 || (final==0 || final<=inicial) || passo==0 ){
        alert('Corrija os dados por favor!')
    }else{
        res.innerHTML = `Contando...<br>`
    for(var x = inicial; x <= final; x += passo){
        res.innerHTML += `<span>&#128073</span> ${x}<br>`
    }
    }
    /*
    if(final==0 || final<=inicial){
        alert('Numero final deve ser maior que inicial e diferente de zero')
    }

    if(passo==0){
        alert('Impossivel contar de zero em zero. Passo será definido como 1')
        passo=1
    }
    
    
    //inicial 10
    //final 50
    //passo 2
    res.innerHTML = ``
    for(var x = inicial; x <= final; x += passo){
        res.innerHTML = `x ${x}`
    }
    */
    

}