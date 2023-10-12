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
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === numeroID){
            //console.log(lista[i].bio);
            return lista[i].bio;
        }
    }
}
//buscaBio(4)

//b) Crie uma função que retorne o name do id passado

function buscaName(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id == numeroID){
            //console.log(lista[i].name);
            return lista[i].name;
        }
    }
}

//buscaName(4)


//c) Crie uma função que apague um item da lista a partir de um id passado

function delObjeto(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id == numeroID){
            delete lista[i];
            //console.log(lista);         
        }
    }
}

//delObjeto(2)


//d) Crie uma função que altere a bio ou o name a partir de um id passado

function alterarNomeBio(numeroID: number, mudar: string, textMudar: string){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id == numeroID){
            if (mudar === "name"){
                lista[i].name = textMudar;
                //console.log(lista[i]);
            } else if (mudar === "bio"){
                lista[i].bio = textMudar;
                //console.log(lista[i]);
            }
            ;         
        }
    }
}

//alterarNomeBio(1, "bio", "Martins é um participante do Orion Bootcamp")



//e) Demonstre todas as funções com o paradigma funcional e com o imperativo

/*================= IMPERATIVO =======================
function buscaBio(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === numeroID){
            //console.log(lista[i].bio);
            return lista[i].bio;
        }
    }
}
================= FUNCIONAL =======================
const buscaBio = (numeroID: number): any => {
    for (let pos in lista){
        if (lista[pos].id === numeroID){
            return lista[pos].bio;
        }
    }

}



================= IMPERATIVO =======================
function buscaName(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id == numeroID){
            //console.log(lista[i].name);
            return lista[i].name;
        }
    }
}
================= FUNCIONAL =======================
const buscaName = (numeroID: number): any => {
    for (let pos in lista){
        if (lista[pos].id === numeroID){
            return lista[pos].name;
        }
    }

}



================= IMPERATIVO =======================
function delObjeto(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id == numeroID){
            delete lista[i];
            //console.log(lista);         
        }
    }
}
================= FUNCIONAL =======================
const delObjeto = (numeroID: number): any => {
    for (let pos in lista){
        if (lista[pos].id === numeroID){
            delete lista[i];
        }
    }

}



================= IMPERATIVO =======================
function alterarNomeBio(numeroID: number, mudar: string, textMudar: string){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id == numeroID){
            if (mudar === "name"){
                lista[i].name = textMudar;
                //console.log(lista[i]);
            } else if (mudar === "bio"){
                lista[i].bio = textMudar;
                //console.log(lista[i]);
            }
            ;         
        }
    }
}
================= FUNCIONAL =======================
const alterarNomeBio = (numeroID: number, mudar: string, textMudar: string): any => {
    for (let pos in lista){
        if (lista[pos].id === numeroID){
            if (mudar === "name"){
                lista[i].name = textMudar;
            } else if (mudar === "bio"){
                lista[i].bio = textMudar;
            }
            ;         
        }
    }
}*/