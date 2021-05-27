reset();

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

// let resultado = document.getElementById("calcular");
let qtdCarne, qtdCerveja, qtdRefri;

let resultado = document.getElementById("calculo");

function calcular() {

    let qtdAdultos = inputAdultos.value;
    let qtdCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    calcularCarne(qtdAdultos, qtdCriancas, duracao);
    calcularCerveja(qtdAdultos, duracao);
    calcularRefri(qtdAdultos, qtdCriancas, duracao);

    console.log(qtdCarne, qtdCerveja, qtdRefri);

    resultado.innerHTML = `<p>${qtdCarne}kg de carne</p>`
    resultado.innerHTML += `<p>${qtdCerveja}l de cerveja</p>`
    resultado.innerHTML += `<p>${qtdRefri}l de refrigerante</p>`
}

function calcularCarne(qtdAdultos, qtdCriancas, duracao) {
    if (duracao < 6) {
        qtdCarne = 400*qtdAdultos + (400/2 * qtdCriancas);
    } else {
        qtdCarne = 650*qtdAdultos + (650/2 * qtdCriancas);
    }
    qtdCarne = qtdCarne/1000;
    return qtdCarne;
}

function calcularCerveja(qtdAdultos, duracao) {
    if (duracao < 6) {
        qtdCerveja = qtdAdultos*1200;
    } else {
        qtdCerveja = qtdAdultos*2000;
    }
    qtdCerveja = qtdCerveja/1000;
    return qtdCerveja;
}

function calcularRefri(qtdAdultos, qtdCriancas, duracao) {
    if (duracao < 6) {
        qtdRefri = 1000*qtdAdultos + (1000/2 * qtdCriancas);
    } else {
        qtdRefri = 1500*qtdAdultos + (1500/2 * qtdCriancas);
    }
    qtdRefri = qtdRefri/1000;
    return qtdRefri;
}

function reset() {
    document.getElementById("adultos").value = "";
    document.getElementById("criancas").value = "";
    document.getElementById("duracao").value = "";
    document.getElementById("calculo").innerHTML = "";
}