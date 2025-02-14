// function conversorStringToInt(string){
//     return string = parseInt(string)
// }

// console.log(conversorStringToInt('10'));

//-------------------------------------------//

// function adicao(a, b) {
//     return valor = a + b
// }

// function subtracao(a, b) {
//     return valor = a - b
// }

// function divisao(a, b) {
//     if(b === 0){
//         return "Nao e possivel duvidir por 0 (zero)!"
//     }
//     return valor = a / b
// }

// function multiplicacao(a, b) {
//     return valor = a * b
// }

// console.log('Digite os valores que deseja realizar a operacao e depois qual operacao:')
// let a = Number(prompt('Digite o primeiro valor:'))
// let b = Number(prompt('Digite o segundo valor:'))
// let operacao = prompt('Digite qual operacao + , - , / ou * :')

// let resultado;

// if (operacao === '+') {
//     resultado = adicao(a, b);
// } else if (operacao === '-') {
//     resultado = subtracao(a, b);
// } else if (operacao === '/') {
//     resultado = divisao(a, b);
// } else if (operacao === '*') {
//     resultado = multiplicacao(a, b)
// }else{
//     resultado = 'Operacao invalida!';
// }

// console.log(`Resultado: ${resultado}`);

//-------------------------------------------//

// function parOuImpar(numero) {
//     if (numero % 2 === 1) {
//         console.log(`O numero ${numero} e impar`);
//     }else{
//         console.log(`O numero ${numero} e par`);
//     }
// }

// parOuImpar(2)

//-------------------------------------------//

// function conversorTemperatura(temperatura, medidaTemperatura){
//     if (medidaTemperatura === 'c'){
//         fahrenheit = ((temperatura * 1.8) + 32)
//         console.log(`A temperatura em fahrenheit e de ${fahrenheit}°F`);
//     } else if (medidaTemperatura === 'f'){
//         celsius = ((5 / 9) * (temperatura - 32))
//         console.log(`A temperatura em Celcius e de ${celsius}°C`);
//     }
// }

// conversorTemperatura(32, 'c')