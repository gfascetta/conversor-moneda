const monedaInicialInput = document.querySelector('#cantidad-inicial');
const cantMonedaInicial = Number(monedaInicialInput.value);

const monedaFinal = document.querySelector('#cantidad-final').textContent
let cantMonedaFinal = 0;

console.log(cantMonedaFinal)


function pesosAMonedaExtranjera(pesos, monedaExt) {
    switch (monedaExt) {
        case dolarEUA:
            pesos * 0.010;
            break;
        case euro:
            pesos * 0.0087;
            break;
        case real:
            pesos * 0.056;
            break;
        default:
            pesos;
    }
}