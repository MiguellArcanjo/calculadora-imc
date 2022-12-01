function meuEscopo () {
    const form = document.querySelector('.formulario'); // selecionando o formulario
    const resultado = document.querySelector('.resultado'); // selecionando a div resultado

    function recebeEventoForm (evento) { // criando o evento
        evento.preventDefault();

        const peso = form.querySelector('.peso'); // pegando o peso 
        const altura = form.querySelector('.altura'); // pegando a altura

        const pesoConv = Number(peso.value) // convertendo o peso para Number
        const alturaConv = Number(altura.value) // convertendo a altura para Number
        
        const imc = pesoConv / alturaConv ** 2 // fazendo o calculo do imc
        const arredondamento = Number(imc.toFixed(2)); // arredondando para ficar so com duas casas decimais 

        // criação das condições
        if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${arredondamento} (Abaixo do peso)</p>`;
            resultado.style.backgroundColor = 'green';
        } 

        else if (imc >= 18.5 && imc <=24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${arredondamento} (Peso Normal)</p>`
            resultado.style.backgroundColor = 'green';
        } 

        else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${arredondamento} (Sobrepeso)</p>`
            resultado.style.backgroundColor = 'green';
        } 
        
        else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${arredondamento} (Obesidade grau 1)</p>`
            resultado.style.backgroundColor = 'green';
        } 
        
        else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${arredondamento} (Obesidade grau 2)</p>`
            resultado.style.backgroundColor = 'green';
        } 

        else if (imc >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${arredondamento}(Obedidade grau 3)</p>`
            resultado.style.backgroundColor = 'green';
        } 

        else {
            resultado.innerHTML = `<p>Altura ou Peso invalidos.</p>`
            resultado.style.backgroundColor = 'red';
        }
    }

    form.addEventListener('submit', recebeEventoForm); // Adicionando o evento ao submit
}

meuEscopo();
