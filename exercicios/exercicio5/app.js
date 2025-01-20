// function imcCorporal(peso, altura){
//     peso = prompt('Digite seu peso');
//     altura = prompt('Digite sua altura');
//     imc = peso / (altura * altura);
//     alert(imc);
// }
// imcCorporal();

// USEI GPT
// function calculoFatorial(n1){
//     n1 = parseInt(prompt('Digite um numero para descobrir seu fatorial'))
//     let resultado = fatorial(n1);
//     alert(`O fatorial de ${n1} e ${resultado}`)
// }

// function fatorial(n) {
//     let resultado = 1;
//     while (n > 1) {
//         resultado *= n;
//         n--;
//     }
//     return resultado;
// }

// calculoFatorial();,

// function dolarEmReais(dolar){
//     let valorEmDolar = prompt(`Quanto dolares voce possui?`);
//     let valorEmReais =valorEmDolar * dolar
//     alert(`Seus ${valorEmDolar} dolares equivalem a ${valorEmReais}`)
// }

// dolarEmReais(4.8);

// function perimetroSala(altura, largura){
//     altura = prompt('Qual a altura da sala?');
//     largura = prompt('Qual a largura da sala?');
//     let perimetro = altura * largura
//     alert(`O perimetro da sala com ${altura} de altura e ${largura} de largura é de ${perimetro}`)
// }

// perimetroSala();

// function perimetroCirculo(pi, raio){
//     raio = prompt('Qual o raio do circulo?')
//     let perimetro = 2 * pi * raio
//     alert(`O perimetro do circulo é de ${perimetro}`);
// }

// perimetroCirculo(3.14)


// USEI GPT
// function tabuada() {
//     let n1 = parseInt(prompt(`Digite o número da tabela que gostaria de saber:`));
//     if (isNaN(n1)) {
//         alert("Por favor, insira um número válido.");
//         return;
//     }
//     let resultado = resultadoTabela(n1);
//     alert(`Os valores da tabuada do número ${n1} são: ${resultado.join(", ")}`);
// }

// function resultadoTabela(n) {
//     let resultados = [];
//     for (let i = 1; i <= 10; i++) { // Tabuada até 10
//         resultados.push(n * i);
//     }
//     return resultados;
// }

// tabuada();
