function sum(x) {

    return function(y) {
      return x + y; 
    };
  
  }
  
console.log( sum(1)(2) ); 


                    // or

function sum(x) {

    return function(y) {
        return x + y;
      };
 
};

const sum1 = sum(1);

console.log (sum1(2));

                // если setTimeout вынести в отдельную функцию func то при каждом ее вызове будет создаваться лексическое окружение 
                // setTimeout будет выводить поочередно результат прохода каждго цикла с запоминанием предыдущих переменных i добавляя +1

let numb = function count() {

for (i = 1; i <= 10; ++i) {
     func(i);
  }
  
  function func(i) {
    setTimeout(function(){
      console.log(i);
    }, 1000);
  }
}

numb();