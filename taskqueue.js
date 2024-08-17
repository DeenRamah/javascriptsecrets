//Asynchronous operations such as timers are handled asynchronously
//when an asynchronous operation completes its callback is pushed into the tasked queue

setTimeout(() =>{
  console.log("Deen Dev");
} ,1000);
