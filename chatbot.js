function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

function botResponse(message) {
  return (
    "I'm not sure I understood your message: '" +
    message +
    "'. Type 'help' to see more options."
  );
}

function showHelpOptions(options) {
  let response = "Enter a keyword for help with a topic: ";
  response += options.join(", ") + ".";
  return response;
}

function contactInfoHelp() {
  return "We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!";
}

function paymentHelp(paymentType) {
  if (paymentType == "credit card") {
    return "You can pay with any major credit card. Enter your card details and billing address at checkout.";
  } else {
    return "We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.";
  }
}

/////////////////////////////////
// Add the new functions here
////////////////////////////////
function findDestination(location,){
  
}
function listDestinations(){
  
}


const helpOptions = [
  "contact",
  "payment",
  "credit card",
  "destinations"
];

function handleInput(userMessage) {
  if (userMessage.includes("help")) {
    return showHelpOptions(helpOptions);
  } else if (userMessage.includes("contact")) {
    return contactInfoHelp();
  } else if (
    userMessage.includes("payment") ||
    userMessage.includes("credit card")
  ) {
    return paymentHelp(userMessage);
  } else if (userMessage.includes("destination")) {

    // Here's the new destinations listing code
    return listDestinations(destinations);
    
  } else if(userMessage.length >= 3) {
    
    // Here's the where we show the destination description
    let destination = findDestination(userMessage, destinations);
    if (destination) {
      return destination.description;
    }
    
    
  }
  return botResponse(userMessage);
}


global.findDestination = findDestination;
global.listDestinations = listDestinations;

global.botGreeting = botGreeting;
global.handleInput = handleInput;