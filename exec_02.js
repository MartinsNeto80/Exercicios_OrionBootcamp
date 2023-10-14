var lista = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//a) Crie uma função que retorne a bio do id passado
function buscaBio(numeroID) {
    var object = lista.find(function (object) { return object.id === numeroID; });
    console.log(object === null || object === void 0 ? void 0 : object.bio);
    return object ? object.bio : "ID inexistente.";
}
if (typeof window !== "undefined") {
    var entradaa_1 = document.getElementById("entradaa");
    var buttona = document.getElementById("buttona");
    var resa_1 = document.getElementById("resa");
    buttona.addEventListener("click", function () {
        var numeroID = Number(entradaa_1.value);
        var bio = buscaBio(numeroID);
        if (bio === "ID inexistente.") {
            resa_1.innerText = "".concat(bio);
            return resa_1.innerText;
        }
        else {
            resa_1.innerText = "A bio do ID selecionado \u00E9 \"".concat(bio, "\".");
            return resa_1.innerText;
        }
    });
}
//b) Crie uma função que retorne o name do id passado
function buscaName(numeroID) {
    var object = lista.find(function (object) { return object.id === numeroID; });
    //console.log(object?.name);    
    return object ? object.name : "ID inexistente.";
}
if (typeof window !== "undefined") {
    var entradab_1 = document.getElementById("entradab");
    var buttonb = document.getElementById("buttonb");
    var resb_1 = document.getElementById("resb");
    buttonb.addEventListener("click", function () {
        var numeroID = Number(entradab_1.value);
        var nome = buscaName(numeroID);
        if (nome === "ID inexistente.") {
            resb_1.innerText = "".concat(nome);
            return resb_1.innerText;
        }
        else {
            resb_1.innerText = "A bio do ID selecionado \u00E9 \"".concat(nome, "\".");
            return resb_1.innerText;
        }
    });
}
//c) Crie uma função que apague um item da lista a partir de um id passado
function delObjeto(numeroID) {
    var object = lista.filter(function (object) { return object.id !== numeroID; });
    return object ? object : "ID inexistente.";
}
if (typeof window !== "undefined") {
    var entradac_1 = document.getElementById("entradac");
    var buttonc = document.getElementById("buttonc");
    var resc_1 = document.getElementById("resc");
    buttonc.addEventListener("click", function () {
        var numeroID = Number(entradac_1.value);
        var contador = delObjeto(numeroID);
        resc_1.innerText = "O id: ".concat(numeroID, " foi deletado com sucesso. ").concat(JSON.stringify(contador));
        return resc_1.innerText;
    });
}
//d) Crie uma função que altere a bio ou o name a partir de um id passado
function alterarNomeBio(numeroID, mudar, textMudar) {
    var object = lista.find(function (object) { return object.id === numeroID; });
    if (object) {
        if (mudar === "name") {
            object.name = textMudar;
            return object;
        }
        if (mudar === "bio") {
            object.bio = textMudar;
            return object;
        }
    }
    else {
        //console.log("ID inexistente.");
        return "ID inexistente.";
    }
}
if (typeof window !== "undefined") {
    var entradad1_1 = document.getElementById("entradad1");
    var entradad2_1 = document.getElementById("entradad2");
    var entradad3_1 = document.getElementById("entradad3");
    var button = document.getElementById("buttond");
    var res_1 = document.getElementById("resd");
    button.addEventListener("click", function () {
        var numeroID = Number(entradad1_1.value);
        var nomeBio = entradad2_1.value;
        var texto = entradad3_1.value;
        var contador = alterarNomeBio(numeroID, nomeBio, texto);
        res_1.innerText = "".concat(JSON.stringify(contador));
        return res_1.innerText;
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
