const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  const names = [`Guadalupe", "Ollie", "Aki`];
  const messages = writeCards(names);
  console.log(messages);



let i= 10
function countDown() {
    for (let i = 10; i >= 0; i--) {
      console.log(i);
    }
  }
