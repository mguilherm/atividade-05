var lsAlunos = [
    "Alef Mourão dos Santos",
    "Andrei Alexei Levy Buslik",
    "Bruno Rafael",
    "Danilo Silva Marques",
    "Dayane Rodrigues Soares",
    "Diego de Souza Sampaio",
    "Emerson de Matos Felisberto",
    "Gabriel de Oliveira Pinho",
    "Henrique Pereira da Silva",
    "Jhone Silva de Souza Justino",
    "Jose Gildevan da Silva Santos",
    "João Francisco dos Santos Chagas Goulart",
    "Julia Torres Furtado Lima",
    "Jônathas da Silva Maciel",
    "Lorena Oliveira Muniz Ferreira",
    "Lucas Luna Cavalcante",
    "Marcos Gabriel Pereira Silva",
    "Marcos Guilherme Barbosa da Silva",
    "Thays Ferreira Melo",
    "Yury Negreiros Santos",
];

var pgAtual = 0;
var tamanhoArray;

function trocar(nLinha, bt) {
    let auxiliar;

    nLinha = nLinha - 1;
    auxiliar = lsAlunos[nLinha];

    if (bt == "s") {
        if (nLinha != 0) {
            lsAlunos[nLinha] = lsAlunos[nLinha - 1];
            lsAlunos[nLinha - 1] = auxiliar;
        }
    } else {
        if (nLinha < lsAlunos.length) {
            lsAlunos[nLinha] = lsAlunos[nLinha + 1];
            lsAlunos[nLinha + 1] = auxiliar;
        }
    }

    carregarTabela(document.getElementById("pgAt").value);
}

function carregarTabela(pg) {
    tamanhoArray = Math.ceil(lsAlunos.length / 5);

    if (pg <= 0 || pg > tamanhoArray) {
        return;
    }

    pgAtual = pg;
    fim = pg * 5;
    inicio = fim - 5;
    txLinhas = "";

    for (i = inicio; i < fim; i++) {
        if (lsAlunos[i] == undefined) break;

        txLinhas += `<tr><td>${Number(i) + 1}</td><td>${lsAlunos[i]}</td><td> 
            <span onclick= "trocar(${Number(i) + 1}, 's')"> ^ </span>
            <span onclick= "trocar(${
                Number(i) + 1
            }, 'd')"> v </span></td></tr>`;
    }

    document.getElementById("corpoTabela").innerHTML = txLinhas;
    itemLista = document.getElementById("pg-" + pg);
    itemLista.classList.add("active");

    antigo = document.getElementById("pgAt");

    if (antigo.value != "") {
        itemLista = document.getElementById("pg-" + antigo.value);
        itemLista.classList.remove("active");
    }

    antigo.value = pg;
}

function mudarPagina(pg) {
    carregarTabela(pgAtual + pg);
}

var lsPagina = `<li class="page-item"><a class="page-link" href="#" onclick="carregarTabela(document.getElementById('pgAt').value -1)">Anterior</a></li>`;
tamanhoArray = Math.ceil(lsAlunos.length / 5);

for (i = 0; i < tamanhoArray; i++) {
    lsPagina += `<li id='pg-${
        Number(i) + 1
    }' class="page-item"><a class="page-link" href="#" onclick="carregarTabela(${
        Number(i) + 1
    })">${Number(i) + 1}</a></li>`;
}

lsPagina += `<li class="page-item"><a class="page-link" href="#" onclick="carregarTabela(Number(document.getElementById('pgAt').value) +1)">Próximo</a></li>`;
document.getElementById("paginacao").innerHTML = lsPagina;
carregarTabela(1);
