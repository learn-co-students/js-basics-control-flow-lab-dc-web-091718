// Write your code in this file!
function scuberGreetingForFeet(someValue) {
//use condition to see if number passed in is greater than 400 feet,
  let driverSay;
  if (someValue <= 400) {
    driverSay = "This one is on me!";
    return driverSay;
  }
  if (someValue>2000) {
    driverSay = "I will gladly take your thirty bucks.";

    if (someValue>2500) {
      driverSay = "No can do.";

    }
    return driverSay;
  }

}

function ternaryCheckCity(city) {

  let check;

  city === 'NYC' ? (check = "Ok, sounds good.") : (check = "No go.");

  return check;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case "generous":
        // Statements
        response = 'Thank you so much.';
        break;
    case "not as generous":
        // Statements
        response = 'Thank you.';
        break;
    default:
        // Statements
        response = "Bye.";
        break;
      }
      return response;
}
