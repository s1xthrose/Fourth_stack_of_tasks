//Задание 1:


/*
let a = +prompt("Первое число", "");
let b = +prompt("Второе число", "");

alert( a + b ); */




//Задание 2:
/*
alert( (6.35 * 10).toFixed(20) );

alert( Math.round(6.35 * 10) / 10); */





//Задание 3:

/*
function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);

    } while ( !isFinal(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`); */





//Задание 4:

//Так как переменная никогда не достигнет конечного значения. Вся проблема в дробях.




//Задание 5:

/*
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) ); */



//Задание 6:
  
function randomInteger(min, max) {
    return min + Math.randomInteger() * (max - min);
  }
  
  alert( randomInteger(1, 5) );
  alert( randomInteger(1, 5) );
  alert( randomInteger(1, 5) ); 