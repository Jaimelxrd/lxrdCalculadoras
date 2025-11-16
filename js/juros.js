function calcularJuros() {
    let P = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("taxa").value) / 100;
    let t = parseFloat(document.getElementById("anos").value);

    if (P > 0 && r >= 0 && t > 0) {
        let jurosSimples = P * r * t;
        let montante = P + jurosSimples;
        document.getElementById("resultado").innerText = 
            "Juros simples: " + jurosSimples.toFixed(2) + 
            " → Montante: " + montante.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Insira valores válidos.";
    }
}
