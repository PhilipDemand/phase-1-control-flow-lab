function scuberGreetingForFeet(rideLength){
  let fare
  if (rideLength <= 400) {
    fare = 'This one is on me!'
  } else if (rideLength > 400 && rideLength <= 2000) {
    fare = 'That will be twenty bucks.'
  } else if (rideLength > 2000 && rideLength <= 2500) {
    fare = 'I will gladly take your thirty bucks.'
  } else {
    fare = 'No can do.'
  }
  return fare
}

function ternaryCheckCity(cityDest){
  let message = cityDest === "NYC" ? "Ok, sounds good." : "No go.";
  return message
}

function switchOnCharmFromTip(generosity){
  switch(generosity) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}