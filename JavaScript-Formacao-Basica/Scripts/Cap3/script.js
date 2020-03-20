let msg = "";

let date = new Date();

let nomeMeses = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro"
];

let dia = String(date.getDate()).padStart(2, "0");
let mes = nomeMeses[date.getMonth()];
let ano = date.getFullYear();

let hoje = dia + " de " + mes + " de " + ano;

msg += "<p>Hoje é dia: " + hoje  + "</p>";

let horas = date.getHours(); 
let minutos = date.getMinutes();
let segundos = date.getSeconds();

let horário = horas + ":" + minutos + ":" + segundos;

msg += "<p>Agora são: " + horário + " horas</p>";

msg += "<hr>";

// ------------------------------------------------------

let array = [1, "oi", true, null];

for (let i = 0; i < array.length; i++) {
    msg += "<p> Tipo de " + array[i] + ": " + typeof(array[i]);
}

msg += "<hr>";

// ------------------------------------------------------

let pens;
pens = ["red", "blue", "green", "orange"];

msg += "<p>Antes: " + pens + "</p>";

// Propriedades
// Receber a propriedade de um objeto por nome
msg += "<p>Tamanho do array: " + pens.length + "</p>";

// MÉTODOS
// Reverter o ARRAY
pens.reverse();
ShowArray(pens, "<strong>Reversa</strong>");

// Remover o primeiro valor do ARRAY
pens.shift();
ShowArray(pens, "<strong>Tirado o primeiro elemento</strong>");

// Adiciona uma lista de valores
// separados por vírgula na frente do ARRAY 
pens.unshift("purple", "black");
ShowArray(pens, "<strong>Adicionado elemento no começo</strong>");

// Remove o último valor do ARRAY
pens.pop();
ShowArray(pens, "<strong>Removido último elemento</strong>");

// Adiciona uma lista de valores
// separados por vírgula no fim do ARRAY 
pens.push("pink", "prussian blue");
ShowArray(pens, "<strong>Adicionado elemento no fim</strong>");

// Ache a posição(pos) especificada 
// e remove n itens do ARRAY
pens.splice(1, 2); // Começa no segundo item e remove dois
ShowArray(pens, "<strong>Removido vários itens</strong>");

// Cria uma cópia do ARRAY. Tipicamente atríbuido à uma varíavel
let newPens = pens.slice();
ShowArray(newPens, "<strong>Novo Array</strong>");

// Retorna o primeiro elemento que equivale 
// ao termo de pesquisa depois do INDEX especificado
let result = pens.indexOf("prussian blue", 3);
msg += "<br><p>O index do resultado da pesquisa é: " + result + "</p>";

// Retorna os itens em um ARRAY como uma STRING 
// separado por vírgulas. O separador é especificado por parâmetro
let arrayString = pens.join(', ');
ShowArray(arrayString, "String separada");

document.querySelector("#output").innerHTML = msg;

function ShowArray(arr, str){
	if(str){
		msg += "<br><p>" + str + ": " + arr + "</p>";
	}else{
		msg += "<br><p>Depois: " + arr + "</p>";
	}
	msg += "<p>Tamanho do array: " + arr.length + "</p>";
}