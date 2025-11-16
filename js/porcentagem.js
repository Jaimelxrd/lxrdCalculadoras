function calcularPorcentagem() {
    let valor = parseFloat(document.getElementById("valor").value);
    let percent = parseFloat(document.getElementById("percent").value);
    if (valor >= 0 && percent >= 0) {
        let resultado = (valor * percent) / 100;
        document.getElementById("resultado").innerText = percent + "% de " + valor + " é " + resultado.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Insira valores válidos.";
    }
}
