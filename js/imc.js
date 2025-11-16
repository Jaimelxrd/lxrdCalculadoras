function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);
        let classificacao = "";
        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";
        document.getElementById("resultado").innerText = "IMC: " + imc.toFixed(2) + " → " + classificacao;
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    }
}
