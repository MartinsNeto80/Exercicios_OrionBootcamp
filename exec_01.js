//Exercicio 01 - A
function contadorVogais(nome) {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var letras = nome.toLowerCase().split('');
    var qnt = 0;
    for (var vogal in vogais) {
        for (var letra in letras) {
            if (vogais[vogal] === letras[letra]) {
                qnt++;
            }
        }
    }
    return qnt;
}
//var contagem = contadorVogais('Adna Patricia')
//console.log(contagem)
//Exercicio 01 - B
if (typeof window !== "undefined") {
    var entrada_1 = document.getElementById("entrada");
    var button = document.getElementById("button");
    var res_1 = document.getElementById("res");
    button.addEventListener("click", function () {
        var nome = entrada_1.value;
        var contador = contadorVogais(nome);
        res_1.innerText = "A quantidade de vogais existentes no nome ".concat(nome, " \u00E9 ").concat(contador, ".");
        return res_1.innerText;
    });
}
