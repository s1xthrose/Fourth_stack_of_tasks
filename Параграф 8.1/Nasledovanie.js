//Задание 1: 

/* 
1.true
2.null
3.undefined */


//Задание 2: 

/*
1:

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen );
  alert( bed.glasses );
  alert( table.money ); */


//2: Откуда берется свойство - неважно.




//Задание 3: rabbit


//Задание 4:
/*
Движок ищет прототип stomach в this, однако не может его обнаружить. Исправим ошибку:

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  speedy.eat("apple");
  alert( speedy.stomach );
  
  alert( lazy.stomach ); */