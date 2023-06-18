function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting
  if (feet<=400){
    greeting = "This one is on me!";
  }
  else if (feet>2000 && feet<2500){
    greeting = "I will gladly take your thirty bucks.";
  }
  else if (feet>2500){
    greeting = "No can do."
  }
  return greeting;
}
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  const greeting = city == "NYC" ? "Ok, sounds good." : "No go.";
  return greeting;
}
ternaryCheckCity("Pittsburgh");

function switchOnCharmFromTip(tip){
  // Write your code here!
  let greeting;
  if (tip == "generous"){
    greeting = "Thank you so much."
  }
  else if (tip == "not as generous"){
    greeting = "Thank you."
  }
  else{
    greeting = "Bye."
  }
  return greeting
}
switchOnCharmFromTip();