interface biografia {
    id: number,
    name: string,
    bio: string
}

let lista: Array<biografia> = [
    {id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];


//a) Crie uma função que retorne a bio do id passado

function buscaBio(numeroID: number){
    //console.log(lista[numeroID-1].bio);
    return lista[numeroID-1].bio;
}

/*buscaBio(1)
buscaBio(2)
buscaBio(3)
buscaBio(4)*/




//b) Crie uma função que retorne o name do id passado

function buscaName(numeroID: number){
    //console.log(lista[numeroID-1].name);
    return lista[numeroID-1].name;
}

/*buscaName(1)
buscaName(2)
buscaName(3)
buscaName(4)*/

//c) Crie uma função que apague um item da lista a partir de um id passado

function delItem(numeroID: number){
    delete lista[numeroID-1];
    //console.log(lista);
}

/*delItem(1)
delItem(2)
delItem(3)
delItem(4)*/


//d) Crie uma função que altere a bio ou o name a partir de um id passado




//e) Demonstre todas as funções com o paradigma funcional e com o imperativo