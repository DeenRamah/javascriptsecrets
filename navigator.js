//preferred language of the user
console.log(window.naviagtor.language)

//get location coordinates
if(navigator.geolocation){
  window.navigator.geolocation.getCurrentPosition(pos =>{
    console.log(pos)
  })
} else {
  console.log("Couln't get the position")
}
