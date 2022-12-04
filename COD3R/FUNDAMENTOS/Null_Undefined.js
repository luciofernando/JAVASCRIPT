const a = {name: 'Joao'} //criação de um objeto com atributo name: Joao

let b = a 

b.name = 'Marcos'

/*
Importante observar que, quando fizemos b.name = 'Marcos' alteramos não somente a variavel b, mas tambem a variavel a. Isso acontece porque quando
estamos tratando de objetos, as variavies armazenam nao o conteudo, mas sim o endereco do conteudo. Logo, como fizemos let b = a, o endereço para o qual (a) apontava, era o mesmo para o qual (b) apontava. Se eu altero o conteudo através da referenciacao de b, a variavel (a) acabada apontando para o conteudo modificado.
*/

console.log(b.name)
console.log(a.name)