"use strict";

let name = prompt("Как тебя зовут?", "");
alert("Добро пожаловать, " + name);

let agree = confirm("Согласны с правилами сайта?");

// let question = prompt("Какое «официальное» название JavaScript?", "");
// if(question == "ECMAScript") {
// 	alert("Верно!");
// } else {
// 	alert("Не знаете? ECMAScript!");
// }

// question = prompt("Задайте число", "");
// if(question > 0) {
// 	alert("1");
// } else if(question < 0) {
// 	alert("-1");
// } else if(question === 0) {
// 	alert("0");
// }


 let question = prompt("Кто Вы?", "");
if(question == "админ") {
	let password = prompt("Пароль?", "");
	if (password == "я главный") {
		alert("Здравствуйте, админ!");
	} else {
		alert("Неверный пароль");
	}
} else {
	alert("Я тебя не знаю")
}