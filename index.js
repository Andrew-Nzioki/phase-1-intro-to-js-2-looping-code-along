function writeCards(names, occasion) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(
      `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`
    );
  }

  return messages;
}

function countDown(countdown) {
  while (countdown >= 0) {
    countdown--;
    console.log(countdown+1);
  }
}
countDown(5)


// function countDown(count){
//     for(let i=count;i>=0;i--){
//         console.log(i)
//     }
// }
// countDown(5)
// // countDown(10);
