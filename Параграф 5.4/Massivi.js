//Задание 1. 4


//Задание 2:

/*
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor ((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги"); */


//Задание 3:

/*
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...} */



//Задание 4:
/*
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() ); */




  //Задание 5:


  function getMaxSum(arr) {
    let maxSum = 0;
    let partSum = 0;
  
    for (let item of arr) {
        
      partSum += item; 
      maxSum = Math.max(maxSum, partSum);
      if (partSum < 0) partSum = 0; 
    }
  
    return maxSum;
  }
  
  alert( getMaxSum([-1, 2, 3, -9]) );
  alert( getMaxSum([-1, 2, 3, -9, 11]) );
  alert( getMaxSum([-2, -1, 1, 2]) );
  alert( getMaxSum([100, -9, 2, -3, 5]) );
  alert( getMaxSum([1, 2, 3]) );
  alert( getMaxSum([-1, -2, -3]) );  