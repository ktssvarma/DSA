function createCounter() {
    let counter = 0;
    function increment() {
      counter++;
      return counter;
    }
    return increment;
  }
  
const counter1 = createCounter();  //counter 0 +1 +2
const counter2 = createCounter(); //counter 0 +1 +2
  
  console.log(counter1()); // 0+1 1
  console.log(counter1()); // 1+1 2
  
  console.log(counter2()); // 0+1 1
  console.log(counter2()); // 1+1 2
  console.log(counter2()); // 2+1 3
  