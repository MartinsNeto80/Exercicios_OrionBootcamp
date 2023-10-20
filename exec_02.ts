interface biografia {
  id: number;
  name: string;
  bio: string;
}

let lista: Array<biografia> = [
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

function buscaBio(numeroID: number): string | undefined {
  const object = lista.find((object) => object.id === numeroID);
  console.log(object?.bio);
  return object ? object.bio : undefined;
}

if (typeof window !== "undefined") {
  const entradaIdFir = document.getElementById("entradaa") as HTMLInputElement;
  const buttonAtivarFir = document.getElementById(
    "buttona"
  ) as HTMLInputElement;
  const resA = document.getElementById("resa") as HTMLInputElement;

  buttonAtivarFir.addEventListener("click", () => {
    const numeroID = Number(entradaIdFir.value);
    const bio = buscaBio(numeroID);
    return (resA.innerText = bio
      ? `A bio do ID selecionado é ${bio}.`
      : "ID Inexistente.");
  });
}

//b) Crie uma função que retorne o name do id passado

function buscaName(numeroID: number): string | undefined {
  const object = lista.find((object) => object.id === numeroID);
  //console.log(object?.name);
  return object ? object.name : undefined;
}

if (typeof window !== "undefined") {
  const entradaIdSec = document.getElementById("entradab") as HTMLInputElement;
  const buttonAtivarSec = document.getElementById(
    "buttonb"
  ) as HTMLInputElement;
  const resB = document.getElementById("resb") as HTMLInputElement;

  buttonAtivarSec.addEventListener("click", () => {
    const numeroID = Number(entradaIdSec.value);
    const nome = buscaName(numeroID);
    if (nome === undefined) {
      return (resB.innerText = `${nome}`);
    } else {
      return (resB.innerText = `A bio do ID selecionado é "${nome}".`);
    }
  });
}

//c) Crie uma função que apague um item da lista a partir de um id passado

function delObjeto(numeroID: number) {
  const objectDel = lista.filter((object) => object.id !== numeroID);
  return objectDel ? objectDel : undefined;
}

if (typeof window !== "undefined") {
  const entradaIdThi = document.getElementById("entradac") as HTMLInputElement;
  const buttonAtivarThi = document.getElementById(
    "buttonc"
  ) as HTMLInputElement;
  const resC = document.getElementById("resc") as HTMLInputElement;

  buttonAtivarThi.addEventListener("click", () => {
    const numeroID = Number(entradaIdThi.value);
    const listaFinal = delObjeto(numeroID);
    resC.innerText = `O id: ${numeroID} foi deletado com sucesso. ${JSON.stringify(
      listaFinal
    )}`;
    return resC.innerText;
  });
}

//d) Crie uma função que altere a bio ou o name a partir de um id passado

function alterarNomeBio(numeroID: number, mudar: string, textMudar: string) {
  const object = lista.find((object) => object.id === numeroID);
  if (object) {
    if (mudar === "name") {
      object.name = textMudar;
      return object;
    }
    if (mudar === "bio") {
      object.bio = textMudar;
      return object;
    }
  } else {
    //console.log("ID inexistente.");
    return "ID inexistente.";
  }
}

if (typeof window !== "undefined") {
  const entradaIdFou = document.getElementById("entradad1") as HTMLInputElement;
  const entradaTxtBio = document.getElementById(
    "entradad2"
  ) as HTMLInputElement;
  const entradaTxtName = document.getElementById(
    "entradad3"
  ) as HTMLInputElement;
  const buttonAtivarFou = document.getElementById(
    "buttond"
  ) as HTMLInputElement;
  const resd = document.getElementById("resd") as HTMLInputElement;

  buttonAtivarFou.addEventListener("click", () => {
    const numeroID = Number(entradaIdFou.value);
    const nomeBio = entradaTxtBio.value;
    const texto = entradaTxtName.value;
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
