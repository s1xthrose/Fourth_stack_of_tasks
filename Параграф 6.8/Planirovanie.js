//Задание 1:

/*
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }

  printNumbers(5, 10); */


//Задание 2:
/*
let i = 0;

setTimeout(() => alert(i), 100);

for(let j = 0; j < 100000000; j++) {
  i++;
} */