//Exercicio 01 - A
function contadorVogais(nome: string) {
    var nome = nome.toLowerCase()
    const vogais: string[] = ['a', 'e', 'i', 'o', 'u']
    var name: Array<string> = nome.split('')
    var qnt = 0
    for (let vogal in vogais) {

        for (let letra in name) {

            if (vogais[vogal] == name[letra]){
                
                qnt++
                 
            }

        }

    }
    return qnt
}

/*var contagem = contadorVogais('Martins')
console.log(contagem)*/

//Exercicio 01 - B
const entrada = document.getElementById("entrada") as HTMLInputElement
const button = document.getElementById("button") as HTMLInputElement
const res = document.getElementById("res") as HTMLInputElement

button.addEventListener("click", () => {
    const nome = entrada.value
    const contador = contadorVogais(nome)
    res.innerHTML = `A quantidade de vogais existentes no nome ${nome} é ${contador}.`
})