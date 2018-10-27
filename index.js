const scuberGreetingForFeet = (anInt) => {
    if (anInt <= 400) {
      return 'This one is on me!';
    } else if (anInt > 1999 && anInt <= 2500) {
          return "I will gladly take your thirty bucks.";
    } else if (anInt > 2500) {
        return "No can do.";
    }
}

const ternaryCheckCity = (aStr) => {

 return aStr === "NYC" ? "Ok, sounds good." : "No go.";
  //
  // if (aStr === 'NYC') {
  //   return "Ok, sounds good.";
  // } else {
  //   return 'No go.';
  // }
}

const switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
