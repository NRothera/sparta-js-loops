//
//
// var array = ["hello", "world", "how are you?"]
//
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i])
// }
//
// var gameOver =true;
//
// while (gameOver) {
//   console.log('game is over')
//   gameOver =false
// }


// Do while - the loop will always run the code once before checking the condition
// var number;
//
// do {
//   number = Math.random();
//   console.log(number)
// } while (number<0.5);


//For in
//
// var myobject = new Object();
//
// myobject.a = "1";
// myobject.b = '2';
// myobject.c ='3';
//
//
// for (var key in myobject) {
//   console.log(key);
//   console.log(myobject[key])
// }

for (var i = 1; i < 101; i++) {
  if (i % 15 === 0){
    console.log( i + "is devisable by 3 and 5, therefore FizzBuzz!");
  }else if (i % 3 ===0){
    console.log(i + "is only divisible by 3 so therefore Fizz")
  }else if (i % 5 ===0){
    console.log(i + ' is only divisible by 3 so therefore Buzz')
  }else{
    console.log(i)
  }
}








//
