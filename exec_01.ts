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


var contagem = contadorVogais('Martins')
console.log(contagem)