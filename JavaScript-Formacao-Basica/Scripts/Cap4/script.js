let msg = "";

// Uma função normal, chamada de forma explícita pelo nome:
function multiplicaTermos(a, b){
    const resultado = a * b;
    msg += "<p>" + a + " multiplicado por " + b + " é: " + resultado + "</p>";
    return resultado;
}
const mult = multiplicaTermos(10, 5);

// Função anônima armazenada na variável.
// Invocada ao fazer a chamada da variável como uma função:
let divideTermos = function(a, b){
    const resultado = a / b;
    msg += "<p>" + a + " dividido por " + b + " é: " + resultado + "</p>";
};
divideTermos(3, 4);

// Expressões de Funções Imediatamente Invocadas
// É executado assim que o navegador a encontra:
(function(a, b){
    const resultado = a / b;
    msg += "<p>" + a + " dividido por " + b + " é: " + resultado;
}(12, 0.75));
msg += "<hr>";

// ---------------------------------------------------------------

// Criando função nomeada básica
function findBiggestFractionWithOutArguments(){
    msg += "<p>";
    msg += a > b ?  a + " > " + b: b + " > " + a;
    msg += "</p>";
}

const a = 3 / 4;
const b = 5 / 7;

findBiggestFractionWithOutArguments();

// Criando função nomeada básica com argumentos e retorna um valor
function findBiggestFraction(a, b) {
    let result;
	result = a > b ? ["firstFraction", a] : ["secondFraction", b];
	return result;
}

frac1 = 4 / 5;
frac2 = 5 / 8;

const res = findBiggestFraction(frac1, frac2);
msg += "<p>O resultado da primeira fração é: " + frac1 + "</p>";
msg += "<p>O resultado da segunda fração é: " + frac2  + "</p>";
msg += "A maior fração é a: " + res[0] + " com o valor: " + res[1];
msg += "<hr>";

// --------------------------------------------------------------------

// Função anonimas

const x = 5 / 7;
const y = 18 / 25;

const theBiggest = function(a, b) {
	let result;
	result = a > b ? ["a", a] : ["b", b];

	return result;
};

msg += "<p>" + theBiggest + "</p>";
msg += "<p>" + theBiggest(x, y) + "</p>";
msg += "<hr>";

// ---------------------------------------------------------------------

// Função IIFE

const frac3 = 7 / 9;
const frac4 = 13 / 25;

const biggest = (function(a, b) {
	let result;
	result = a > b ? ["a", a] : ["a", b];

	return result;
}(frac3, frac4));


msg += "<p>" + biggest + "</p>";
msg += "<hr>";

// ---------------------------------------------------------------------

// Objetos
let curso = {
	titulo: "Javascript: Formação Básica",
	instrutora: "Amanda Cavallaro",
	nivel: "1",
	dataDePublicacao: "27/01/2020",
	numeroDeVisualizacoes: 1454,
	atualizaNumeroDeVisualizações: function() {
		return ++curso.numeroDeVisualizações;
	}
};

msg += "<p>" + curso.titulo + "</p>";
msg += "<p>" + curso.instrutora + "</p>";
msg += "<p>" + curso.nivel + "</p>";
msg += "<p>" + curso.dataDePublicacao + "</p>";
msg += "<p>" + curso.numeroDeVisualizacoes + "</p>";
msg += "<hr>";

// --------------------------------------------------------------------

// Construtores

function Curso(titulo, instrutora, nivel, dataDePublicacao, numeroDeVisualizacoes){
    this.titulo = titulo;
	this.instrutora = instrutora;
	this.nivel = nivel;
	this.dataDePublicacao = dataDePublicacao;
    this.numeroDeVisualizacoes = numeroDeVisualizacoes;
    this.atualizaNumeroDeVisualizações = function(){
        return ++this.numeroDeVisualizacoes;
    };
}

let curso01 = new Curso("JavaScript: Formação Básica", "Amanda Cavallaro", "1", "27/01/2020", 1454);
let cursos = [
    new Curso(
        "JavaScript: Formação Básica",
        "Amanda Cavallaro",
        "1",
        false,
        0
    ),
	curso01,
];


for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];
    msg += "<p>Curso: " + (i + 1) + "<br>";
    msg += curso.titulo + "<br>";
    msg += curso.instrutora + "<br>";
    msg += curso.nivel + "<br>";
    msg += curso.dataDePublicacao + "<br>";
    msg += curso.numeroDeVisualizacoes + "</p>";
}

msg += "<hr>";
// -------------------------------------------------------------------------

// Closure

function fazerCalculo() {
	const a = 5;
	const b = 4;

	function multiplicarTermos() {
		const resultadoMultiplicação = a * b;
		return resultadoMultiplicação;
	}

	return multiplicarTermos;
}

const resultado = fazerCalculo();

msg += "O resultado: " + resultado();
msg += "<hr>";

// -------------------------------------------------------------------------

document.querySelector("#output").innerHTML = msg;
