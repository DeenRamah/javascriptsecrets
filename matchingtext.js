//you can use the test method to check if a string matches the regex pattern
const pattern = /apple/;
const text = "I love apples";
if(pattern.test(text)){
  console.log("Pattern found!");
}else{
  console.log("Pattern not found");
}
