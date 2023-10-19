var lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
//a) Crie uma função que retorne a bio do id passado
function buscaBio(numeroID) {
    var object = lista.find(function (object) { return object.id === numeroID; });
    console.log(object === null || object === void 0 ? void 0 : object.bio);
    return object ? object.bio : undefined;
}
if (typeof window !== "undefined") {
    var entradaIdFir_1 = document.getElementById("entradaa");
    var buttonAtivarFir = document.getElementById("buttona");
    var resA_1 = document.getElementById("resa");
    buttonAtivarFir.addEventListener("click", function () {
        var numeroID = Number(entradaIdFir_1.value);
        var bio = buscaBio(numeroID);
        return (resA_1.innerText = bio
            ? "A bio do ID selecionado \u00E9 ".concat(bio, ".")
            : "ID Inexistente.");
    });
}
//b) Crie uma função que retorne o name do id passado
function buscaName(numeroID) {
    var object = lista.find(function (object) { return object.id === numeroID; });
    //console.log(object?.name);
    return object ? object.name : undefined;
}
if (typeof window !== "undefined") {
    var entradaIdSec_1 = document.getElementById("entradab");
    var buttonAtivarSec = document.getElementById("buttonb");
    var resB_1 = document.getElementById("resb");
    buttonAtivarSec.addEventListener("click", function () {
        var numeroID = Number(entradaIdSec_1.value);
        var nome = buscaName(numeroID);
        if (nome === undefined) {
            return (resB_1.innerText = "".concat(nome));
        }
        else {
            return (resB_1.innerText = "A bio do ID selecionado \u00E9 \"".concat(nome, "\"."));
        }
    });
}
//c) Crie uma função que apague um item da lista a partir de um id passado
function delObjeto(numeroID) {
    var objectDel = lista.filter(function (object) { return object.id !== numeroID; });
    return objectDel ? objectDel : undefined;
}
if (typeof window !== "undefined") {
    var entradaIdThi_1 = document.getElementById("entradac");
    var buttonAtivarThi = document.getElementById("buttonc");
    var resC_1 = document.getElementById("resc");
    buttonAtivarThi.addEventListener("click", function () {
        var numeroID = Number(entradaIdThi_1.value);
        var listaFinal = delObjeto(numeroID);
        resC_1.innerText = "O id: ".concat(numeroID, " foi deletado com sucesso. ").concat(JSON.stringify(listaFinal));
        return resC_1.innerText;
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
    var entradaIdFou_1 = document.getElementById("entradad1");
    var entradaTxtBio_1 = document.getElementById("entradad2");
    var entradaTxtName_1 = document.getElementById("entradad3");
    var buttonAtivarFou = document.getElementById("buttond");
    var resd_1 = document.getElementById("resd");
    buttonAtivarFou.addEventListener("click", function () {
        var numeroID = Number(entradaIdFou_1.value);
        var nomeBio = entradaTxtBio_1.value;
        var texto = entradaTxtName_1.value;
        var contador = alterarNomeBio(numeroID, nomeBio, texto);
        resd_1.innerText = "".concat(JSON.stringify(contador));
        return resd_1.innerText;
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
function buscaBio(numeroID: number): string | undefined {
  const object = lista.find((object) => object.id === numeroID);
  console.log(object?.bio);
  return object ? object.bio : undefined;
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
function buscaName(numeroID: number): string | undefined {
  const object = lista.find((object) => object.id === numeroID);
  //console.log(object?.name);
  return object ? object.name : undefined;
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
function delObjeto(numeroID: number) {
  const objectDel = lista.filter((object) => object.id !== numeroID);
  return objectDel ? objectDel : undefined;
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
