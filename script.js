// console.log

// Задание 1
let year = prompt("Введите свой возраст, или возраст ребёнка! ", " ")
if (year >= 0 && year < 12){
  alert ("Это ребёнок")}
  if (year >= 12 && year < 18) {
    alert ("Это подросток")
  }
  if (year >= 18 && year < 60){
    alert ("Вы взрослый")
  }
  if (year >= 60){
    alert ("У вас почтенный возраст")
  }
  
 
// Задание 2
let num = prompt("Введите число от 0 до 9! ", " ");
if (num == 0) {alert ("0 - )")}
else if (num == 1) {alert ("1 - !")}
else if (num == 2) {alert ("2 - @")}
else if (num == 3) {alert ("3 - #")}
else if (num == 4) {alert ("4 - $")}
else if (num == 5) {alert ("5 - %")}
else if (num == 6) {alert ("6 - ^")}
else if (num == 7) {alert ("7 - &")}
else if (num == 8) {alert ("8 - *")}
else if (num == 9) {alert ("9 - (")}

// switch(num) {
//   case '0':
//     alert ("0 - )")
//   case '1':
//     alert ("1 - !")
//   case '2':
//     alert ("2 - @")
//   case '3':
//     alert ("3 - #")
//   case '4':
//     alert ("4 - $")
//   case '5':
//     alert ("5 - %")
//   case '6':
//     alert ("6 - ^")
//   case '7':
//     alert ("7 - &")
//   case '8':
//     alert ("8 - *")
//   case '9':
//     alert ("9 - (")
// }


// Задание 3
let nmb3 = prompt("Введите трёхзначное число: ", " ");
let a = Math.floor(nmb3 / 100);
let b = (nmb3 - a*100);
// let b = (nmb3 % 100);
let c = Math.floor(b / 10);
let d = (b - c * 10);
if (a != c && a != d && c != d)
  alert ("Одинаковых цифр нет! ")
else alert ("Обнаружены одинаковые цифры")


// Задание 4
let y = prompt("Введите год: ", " ")
if (y % 400 || y % 4 == 0 && y % 100 !== 0) {
  alert ("Високосный год");
}
else {
  alert ("Не високосный год");
}


// Задание 5
let numFiveR = prompt("Введите пятиразрядное число: от 10000 до 99999", " ")
if (numFiveR === numFiveR.split('').reverse().join('')){
  alert ("палиндром");}
else {
  alert ("Не палиндром")
}


// Задание 6
const courseEUR = Number(0.9775);
const courseUAN = Number(7.3);
const courseAZN = Number(467.29);
let EUR = 1;
let UAN = 2;
let AZN = 3;
let dollar = prompt("Введите количество долларов: ", " ");
let val = prompt("Введите валюту, в которую вы хотите перевести доллары: EUR - 1, UAN - 2, AZN - 3", " ")
if (val = 1){
  alert ("Количество Евро по текущему курсу при обмене: " + (dollar * courseEUR) + " €");
}
else if (val = 2) {
  alert ("Количество Юань по текущему курсу при обмене: " + (dollar * courseUAN) + " CRN");
}
else if (val = 3) {
  alert ("Количество Азербайджанских Манатов по текущему курсу при обмене: " + (dollar * courseAZN) + " CRN");
}


// Задание 7
let sum = prompt("Введите сумму покупки: ", " ")
if (sum > 200 & sum< 300) {
  alert ("Сумма к оплате со скидкой 3% составит: " + (sum - (sum/100*3))+ " руб.")
}
else if (sum >= 300 && sum < 500) {
  alert ("Сумма к оплате со скидкой 5% составит: " + (sum - (sum/100*5))+ " руб.")
}
else if(sum >=500 ) {
  alert ("Сумма к оплате со скидкой 7% составит: " + (sum - (sum/100*7))+ " руб.")
}
else if(sum < 200) 
  alert ("Скидка не предоставляется!")


// Задание 8
PI = 3.14
let l= prompt("Введите длину окружности: ", " ");
let p= prompt("Введите периметр квадрата: ", " ");
let D = (l / PI);
let h = (p/4);
if (D <= h) {
  alert("Такая окружность впишется в данный квадрат")
}
else {
  alert("Такая окружность не впишется в данный квадрат")
}


// Задание 9
let capt = prompt("Введите столицу Великобритании? 1 - Лондон, 2 - Нью Йорк, 3 - Париж");
let curr = prompt("Какая валюта в США? 1 - USD, 2 - UAH, 3 - EUR,");
let country = prompt("Какая страна самая густонаселенная? 1 - США, 2 - Япония, 3 - Китай");
let summ = 0;
if (capt == 1)
  summ += 2;
if (curr == 1)
  summ += 2;
if (country == 3)
  summ += 2;
alert("Ваш результат: " + summ)


// Задание 10
alert(
  "Введите дату (день, месяц, год) "
);
let date = Math.abs(
  Math.floor(Number(prompt("Введите число месяца от 1 до 31: ")))
);
let month = Math.abs(
  Math.floor(Number(prompt("Введите порядковый номер месяца от 1 до 12: ")))
);
let years = Math.floor(Number(prompt("Введите год: ")));
if (date < 1 || date > 31 || month < 1 || month > 12) {
  date = 1;
  month = 1;
  alert(
    "Вы некорректно указали день либо порядковый номер месяца. Дата автоматически будет сброшена на 1 января. Для повторного ввода данных обновите страницу (клавиша F5)"
  );
}
if ((month < 10) & (date < 10)) {
  alert(
    `Вы запросили дату 0${date}.0${month}.${years}, если ошиблись при вводе, обновите страницу`
  );
} else if ((month > 9) & (date < 10)) {
  alert(
    `Вы запросили дату 0${date}.${month}.${years}, если ошиблись при вводе, обновите страницу`
  );
} else if ((month < 10) & (date > 9)) {
  alert(
    `Вы запросили дату ${date}.0${month}.${years}, если ошиблись при вводе, обновите страницу`
  );
} else {
  alert(
    `Вы запросили дату ${date}.${month}.${years}, если ошиблись при вводе, обновите страницу (F5)`
  );
}
let leapYear = Number(0);
if ((years % 4 == 0) & (years % 100 != 0) || years % 400 == 0) {
  leapYear = 1;
  alert("Введенный вами год является високосным");
}
let newDate = date;
let newMonth = month;
let newYear = years;
newDate += 1;
if ((newDate > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
  newDate = 1;
  newMonth += 1;
} //делаем переход на след.мес. в апреле, июне, сентябре, ноябре
if (
  (newDate > 31) &
  (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
  newDate = 1;
  newMonth += 1;
} //делаем переход на след. мес. в январе, марте, мае, июле, августе, октябре и декабре
if ((newDate > 31) & (month == 12)) {
  newDate = 1;
  newMonth = 1;
  newYear += 1;
}
if ((newDate > 28) & (month == 2) & (leapYear == 0)) {
    newDate = 1;
  newMonth = 3;
}
if ((newDate > 29) & (month == 2) & (leapYear == 1)) {
  newDate = 1;
  newMonth = 3;
}
if ((date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
  date = 0;
} //проверяем, что в апреле, июне, сентябре, ноябре, текущая дата не превышает 30 дней, если такое произошло - обнуляем дату
if (
  (date > 31) & (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
  date = 0;
} //проверяем, что в январе, марте, мае, июле, августе, октябре и декабре текущая дата не превышает 31 день, если такое произошло - обнуляем дату
if ((date > 28) & ((month == 2) & (leapYear == 0))) {
  date = 0;
} //проверяем, чтобы в високосном году не ввели 30 февраля, обнуляем дату
if ((date > 29) & ((month == 2) & (leapYear == 1))) {
  date = 0;
} //проверяем, чтобы в невисокосном году не ввели 29 февраля, обнуляем дату
if (date == 0) {
  alert("Вы ввели некорректную дату, обновите страницу и попробуйте снова");
} else {
  if ((newMonth < 10) & (newDate < 10)) {
    alert(`Следующая дата 0${newDate}.0${newMonth}.${newYear}`);
  } else if ((newMonth > 9) & (newDate < 10)) {
    alert(`Следующая дата 0${newDate}.${newMonth}.${newYear}`);
  } else if ((newMonth < 10) & (newDate > 9)) {
    alert(`Следующая дата ${newDate}.0${newMonth}.${newYear}`);
  } else {
    alert(`Следующая дата ${newDate}.${newMonth}.${newYear}`);
  }
}




  // if (day=28 & month == 2)
  // date.setDate(date.getDate() + 2);
  // alert( date ); 






