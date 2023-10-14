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

function buscaBio(numeroID: number): string{
    const object = lista.find((object) => object.id === numeroID);
    console.log(object?.bio);    
    return object ? object.bio : "ID inexistente.";
 }

 if (typeof window !== "undefined") {
    const entradaa = document.getElementById("entradaa") as HTMLInputElement;
    const buttona = document.getElementById("buttona") as HTMLInputElement;
    const resa = document.getElementById("resa") as HTMLInputElement;
    
    buttona.addEventListener("click", () => {
        const numeroID = Number(entradaa.value);
        const bio = buscaBio(numeroID);
        if (bio === "ID inexistente."){
            resa.innerText = `${bio}`;
            return resa.innerText;
        } else {
            resa.innerText = `A bio do ID selecionado é "${bio}".`;
            return resa.innerText;
        }
    });
    }


//b) Crie uma função que retorne o name do id passado

function buscaName(numeroID: number): string{
    const object = lista.find((object) => object.id === numeroID);
    //console.log(object?.name);    
    return object ? object.name : "ID inexistente.";
 }

 if (typeof window !== "undefined") {
    const entradab = document.getElementById("entradab") as HTMLInputElement;
    const buttonb = document.getElementById("buttonb") as HTMLInputElement;
    const resb = document.getElementById("resb") as HTMLInputElement;
    
    buttonb.addEventListener("click", () => {
        const numeroID = Number(entradab.value);
        const nome = buscaName(numeroID);
        if (nome === "ID inexistente."){
            resb.innerText = `${nome}`;
            return resb.innerText;
        } else {
            resb.innerText = `A bio do ID selecionado é "${nome}".`;
            return resb.innerText;
        }
    });
    }


//c) Crie uma função que apague um item da lista a partir de um id passado

function delObjeto(numeroID: number){
    const object = lista.filter((object) => object.id !== numeroID);
    return object ? object : "ID inexistente.";
 } 

 if (typeof window !== "undefined") {
    const entradac = document.getElementById("entradac") as HTMLInputElement;
    const buttonc = document.getElementById("buttonc") as HTMLInputElement;
    const resc = document.getElementById("resc") as HTMLInputElement;
    
    buttonc.addEventListener("click", () => {
        const numeroID = Number(entradac.value);
        const contador = delObjeto(numeroID);
        resc.innerText = `O id: ${numeroID} foi deletado com sucesso. ${JSON.stringify(contador)}`;
        return resc.innerText;
    });
    }

//d) Crie uma função que altere a bio ou o name a partir de um id passado

function alterarNomeBio(numeroID: number, mudar: string, textMudar: string){
    const object = lista.find((object) => object.id === numeroID);
        if (object) {
            if(mudar === "name"){
                object.name = textMudar;
                return object
            }
            if (mudar === "bio") {
                object.bio = textMudar;
                return object
            }
        } else {
            //console.log("ID inexistente.");
            return "ID inexistente.";
        }   
 }

 if (typeof window !== "undefined") {
    const entradad1 = document.getElementById("entradad1") as HTMLInputElement;
    const entradad2 = document.getElementById("entradad2") as HTMLInputElement;
    const entradad3 = document.getElementById("entradad3") as HTMLInputElement;
    const buttond = document.getElementById("buttond") as HTMLInputElement;
    const resd = document.getElementById("resd") as HTMLInputElement;
    
    buttond.addEventListener("click", () => {
        const numeroID = Number(entradad1.value);
        const nomeBio = entradad2.value;
        const texto = entradad3.value;
        const contador = alterarNomeBio(numeroID, nomeBio, texto);
        resd.innerText = `${JSON.stringify(contador)}`;
        return resd.innerText;
    });
    }
/*//alterarNomeBio(4, "name", "Martins Neto")



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
function buscaBio(numeroID: number): string{
    const object = lista.find((object) => object.id === numeroID);
    //console.log(object?.bio);    
    return object ? object.bio : "ID inexistente.";
 }



================= IMPERATIVO =======================
function buscaName(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === numeroID){
            //console.log(lista[i].name);
            return lista[i].name;
        }
    }
}
================= FUNCIONAL =======================
function buscaName(numeroID: number): string{
    const object = lista.find((object) => object.id === numeroID);
    //console.log(object?.name);    
    return object ? object.name : "ID inexistente.";
 }



================= IMPERATIVO =======================
function delObjeto(numeroID: number){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === numeroID){
            delete lista[i];
            //console.log(lista);         
        }
    }
}
================= FUNCIONAL =======================
function delObjeto(numeroID: number){
    const object = lista.findIndex((object) => object.id === numeroID);
    return object ? lista.splice(object,1) : "ID inexistente.";
}



================= IMPERATIVO =======================
function alterarNomeBio(numeroID: number, mudar: string, textMudar: string){
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === numeroID){
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
function alterarNomeBio(numeroID: number, mudar: "name" | "bio", textMudar: string){
    const object = lista.find((object) => object.id === numeroID);
        if (object) {
            object[mudar] = textMudar;
        } else {
            //console.log("ID inexistente.");
            return "ID inexistente.";
        }   
 }*/