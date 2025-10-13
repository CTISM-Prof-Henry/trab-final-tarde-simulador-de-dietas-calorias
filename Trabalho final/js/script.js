document.getElementById('calcularBtn').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idade = parseFloat(document.getElementById('idade').value);
    const genero = document.getElementById('genero').value;
    const resultado = document.getElementById('resultadoCalorias');

    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        resultado.textContent = "Por favor, preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
    }

    let tmb;

    if (genero === "masculino") {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }

    resultado.style.color = "black";
    resultado.textContent = `A sua taxa metabólica basal é de aproximadamente ${tmb.toFixed(0)} calorias por dia.`;
});