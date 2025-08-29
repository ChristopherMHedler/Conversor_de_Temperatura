function converter() {
    // Pega o valor da temperatura do campo de input
    const temperaturaInput = document.getElementById('temperatura').value;
    const resultadoElement = document.getElementById('resultado');

    // Validação: verifica se a entrada é um número válido e não está vazia
    if (isNaN(temperaturaInput) || temperaturaInput === '') {
        resultadoElement.textContent = 'Por favor, digite um número válido.';
        return; // Sai da função se a validação falhar
    }

    const temperatura = parseFloat(temperaturaInput);
    
    // Pega as unidades selecionadas
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;

    let resultado;
    let simboloUnidade;

    // --- Lógica de conversão ---
    if (unidadeOrigem === unidadeDestino) {
        resultado = temperatura;
    } else if (unidadeOrigem === 'celsius') {
        if (unidadeDestino === 'fahrenheit') {
            resultado = (temperatura * 9/5) + 32;
        } else { // para Kelvin
            resultado = temperatura + 273.15;
        }
    } else if (unidadeOrigem === 'fahrenheit') {
        if (unidadeDestino === 'celsius') {
            resultado = (temperatura - 32) * 5/9;
        } else { // para Kelvin
            resultado = (temperatura - 32) * 5/9 + 273.15;
        }
    } else { // unidade de origem é Kelvin
        if (unidadeDestino === 'celsius') {
            resultado = temperatura - 273.15;
        } else { // para Fahrenheit
            resultado = (temperatura - 273.15) * 9/5 + 32;
        }
    }

    // Define o símbolo da unidade de destino
    if (unidadeDestino === 'celsius') {
        simboloUnidade = '°C';
    } else if (unidadeDestino === 'fahrenheit') {
        simboloUnidade = '°F';
    } else {
        simboloUnidade = 'K';
    }
    
    // Formata e exibe o resultado
    resultadoElement.textContent = `${resultado.toFixed(2)} ${simboloUnidade}`;
}