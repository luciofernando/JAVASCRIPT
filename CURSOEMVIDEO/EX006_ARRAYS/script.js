var select = document.createElement('select')
select.setAttribute('size', '10')

var fim = document.createElement('input')
fim.setAttribute('type','button')
fim.setAttribute('value','Finalizar')
fim.setAttribute('onclick','finalizar()')

var x=0
var lista = []

function adicionar(){
var n = document.getElementById('inum')
var form = document.getElementById('form')
var res = document.getElementById('res')


if(n.value == 0){
    alert('Digite um numero entre 1 e 100')
}else{
    lista[x] = Number(n.value)
    form.appendChild(select)

    var opt = document.createElement('option')
    opt.text = `número ${lista[x]} adicionado` 
    select.appendChild(opt)
         
    }
    res.innerHTML += `${lista[x]}`
    x++
    
}
res.appendChild(fim)


function finalizar(){ 
   var maior = Math.max.apply(null, lista)
   var menor = Math.min.apply(null, lista)
   var qtde = lista.length
   var soma = 0
   for(var i = 0; i<lista.length; i++){
    soma += lista[i]
   }
   
   var media = soma / Number(lista.length)

   res.innerHTML = `Foram adicionados ${qtde} elementos. <br> Maior numero adicionado é ${maior}. <br> O menor valor adicionado é ${menor} <br> A soma de todos os elementos adicionados é ${soma} <br> A média dos numeros adicionados é ${media} `
}







