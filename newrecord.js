const person ={
  name: "Deen Dev"
}

const personToJSON = JSON.stringify(person);
localStorage.setItem("person", personToJSON);
