// EXERCÍCIOS AULA 2

// 1. Crie uma variável nome com seu nome e imprima Olá, [nome]!
const nome = "Guilherme";
console.log(`Olá, ${nome}!`);

// 2. Crie duas variáveis numéricas a = 15 e b = 4. Imprima a soma, subtração, multiplicação, 
// divisão e o resto da divisão de a por b.
const a = 15;
const b = 4;
console.log(typeof a);
console.log(typeof b);
console.log(`soma = ${a+b}`); 
console.log(`subtração = ${a-b}`); 
console.log(`multiplicação = ${a*b}`); 
console.log(`divisão = ${a/b}`); 
console.log(`resto = ${a%b}`);

// 3. Crie uma variável preco = 80 e calcule o preço com 15% de desconto. Imprima o resultado.
const preco = 80;
let desconto = 15;
console.log(`Preço = ${preco}`);
console.log(`Desconto = ${desconto}`);
console.log(`Preço final = ${preco-preco*desconto/100}`);

// 4. Crie raio = 5 e calcule a área de um círculo (Math.PI * raio ** 2)
const raio = 5;
console.log(`Área da circunferências = ${Math.PI * raio ** 2}`);

// 5. Crie uma variável temperatura = 28 e imprima se está calor (true se maior que 25)
const temperatura = 28
console.log(`Está calor? ${temperatura > 25}`);

// 6. Crie numero = 17 e imprima se é par usando o operador %
const numero = 17
console.log(`Número é par? ${numero % 2 === 0}`);

// 7. Crie idade = 20 e temCarteira = true. Imprima se pode dirigir (idade >= 18 e tem carteira)
const idade = 20;
const temCarteira = true;
console.log(`Pode dirigir? ${idade >= 18 && temCarteira}`);

// 8. Use typeof em cinco valores diferentes (um string, um number, um boolean, undefined e null)
// e observe os resultados. Algo te surpreendeu?
const string = "string";
const number = 13;
const boolean = true;
const und = undefined; // não aceita criar váriavel de nome "undefined"
const nu = null; // não aceita criar variável de nome "null"
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof und);
console.log(typeof nu); // resultado foi "object". Por quê?

// 9. Aplicação com seu background: crie variáveis para horasTrabalhadas = 160 e valorHora = 45.
// Calcule o salário bruto e mostre com template literal: Salário bruto: R$ ...
const horasTrabalhadas = 160;
const valorHora = 45;
console.log(`Salário bruto: ${horasTrabalhadas * valorHora}`);

// 10. Desafio de lógica: converta 3725 segundos em horas, minutos e segundos restantes
// (dica: use divisão inteira com Math.floor() e o operador %).
// Resultado esperado: 1h 2min 5s
const tempoEmSegundos = 3725;
console.log(`Tempo total em segundos: ${tempoEmSegundos}.`);
console.log(`Conversão: ${Math.floor(tempoEmSegundos/3600)}h ${Math.floor((tempoEmSegundos%3600)/60)}min ${tempoEmSegundos % 60}s`);