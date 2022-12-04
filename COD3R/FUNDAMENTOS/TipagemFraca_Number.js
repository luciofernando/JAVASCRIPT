/*
    Quando falamos em tipagem fraca, significa que é o JS é flexivel quanto falamos do tratamento dos tipos de dados: inteiros, strings, etc
    Por exemplo, uma variavel pode receber em determinado momento um número inteiro, em outro uma string, e em outro momento um numero de 
    ponto flutuante. Isso gera situações onde devemos tomar certos cuidados. Veja:
 */

    let number = Number(10) //aqui nossa variavel recebeu numero 10
    console.log(Number.isInteger(number))

    number = 'Ola mundo'    //aqui nossa variavel recebeu uma string 'Ola mundo' e o condigo continua funcionando
    console.log(typeof(number))

    var preco = 10
    console.log(preco/0) //em outras linguagens essa setença daria erro, pois divisao por zero nao existe. Mas no JS ele returna um Infinity

    console.log('10'/5) //outra curiosidade, o JS ao receber um numero no formato string ainda consegue fazer esta divisão

    console.log('string'/2) //aqui o JS nao aceita a divisao, pois nao ha como dividir palavra por numero
