let name1 = prompt("Введите ваше имя");
alert("Привет, " + name1 + "!");

let numb1 = +prompt("Введите ваш год рожения");
const old = 2023;
let result1 = (old - numb1);
alert("Ваш возраст: " + result1);

let numb2 = +prompt("Укажите длинну стороны квадрата для вычисления периметра");
let result2 = numb2*4;
alert("Ваш периметер: " +result2);

let numb3 = +prompt("Укадите радиус круга для определения его площади");
let result3 = 3.14*numb3**2;
alert("Ваща прощадь: " +result3);


let distance = prompt("Укажите расстояние в киллометрах между городами:");
let hours = prompt("Укажите время в часах за которое вы ходите попасть из года А в город Б:");
let speed = distance / hours;
alert("Ваша скорость должна быть: " + speed + " км/час.");

let dollars = +prompt("Введите сумму в долларах которую хотите перевести в евро:");
let euros = 0.93;
let result4 = dollars * euros;
alert(`${dollars} долларов = ${result4} евро`);

let flash = prompt("Введите обьем флешки в ГБ:");
let fileSize = 0.82;
let result5 = Math.floor(flash / fileSize)
alert("На флешку поместиться: " +result5 + " файлов"); 

let wallet = prompt("Введите сумму у вас в кошельке:");
let chocolate = prompt("Введите стоимость шоколадки:");
let chocolate1 = Math.floor(wallet / chocolate);
let money = wallet - (chocolate1 * chocolate);
alert(`Вы можете купить ${chocolate1} шоколадок и у вас останеться ${money} грн.`);

let numb4 = prompt("Введите трехзначное число:");
  let numb5 = Math.floor(numb4 / 100);
  let numb6 = Math.floor((numb4 % 100) / 10);
  let numb7 = numb4 % 10;
  let palindrome = numb7 * 100 + numb6 * 10 + numb5;
  alert(`Палидром числа ${numb4} - ${palindrome}`);

let numb8 = prompt("Введите число:");
let isEven = (numb8 % 2 === 0);
let result = isEven && "парное" || "непарное";
alert(`Число ${numb8} являеться ${result}.`);