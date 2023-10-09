//Exercicio 01 - A
function contadorVogais(nome) {
    var nome = nome.toLowerCase();
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var name = nome.split('');
    var qnt = 0;
    for (var vogal in vogais) {
        for (var letra in name) {
            if (vogais[vogal] == name[letra]) {
                qnt++;
            }
        }
    }
    return qnt;
}
/*var contagem = contadorVogais('Martins')
console.log(contagem)*/
//Exercicio 01 - B
var entrada = document.getElementById("entrada");
var button = document.getElementById("button");
var res = document.getElementById("res");
button.addEventListener("click", function () {
    var nome = entrada.value;
    var contador = contadorVogais(nome);
    res.innerHTML = "A quantidade de vogais existentes no nome ".concat(nome, " \u00E9 ").concat(contador, ".");
});
