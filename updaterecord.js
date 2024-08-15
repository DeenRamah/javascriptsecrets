const person ={
  name: "Deen Dev",
  age:22
}

const personToJSON = JSON.stringify(person);
localStorage.setItem("person", personToJSON);
