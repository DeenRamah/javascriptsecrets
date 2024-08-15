const person ={
  name: "Deen Dev"
}

const personToJSON = JSON.stringify(person);
localstorage.setItem("person", personToJSON);
