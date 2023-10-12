//Exercicio 01 - A
function contadorVogais(nome: string) {
    const vogais: string[] = ['a', 'e', 'i', 'o', 'u'];
    const letras: Array<string> = nome.toLowerCase().split('');
    let qnt = 0;
    for (let vogal in vogais) {

        for (let letra in letras) {

            if (vogais[vogal] === letras[letra]){
                
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
const entrada = document.getElementById("entrada") as HTMLInputElement;
const button = document.getElementById("button") as HTMLInputElement;
const res = document.getElementById("res") as HTMLInputElement;

button.addEventListener("click", () => {
    const nome = entrada.value
    const contador = contadorVogais(nome);
    res.innerText = `A quantidade de vogais existentes no nome ${nome} é ${contador}.`;
    return res.innerText;
});
}