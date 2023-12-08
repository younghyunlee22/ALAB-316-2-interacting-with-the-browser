function handleGuess() {
  const secretNumber = Math.floor(Math.random() * 110);
  console.log(secretNumber);
  let count = 7;
  let arrResult = [];

  function makeGuess() {
    let numUserGuess;
    for (let i = 0; i <= 6; i++) {
      // choose the message
      let message;
      if (i === 0) {
        message = "Enter a number: ";
      } else {
        if (numUserGuess < secretNumber) {
          message = `Your previous guess: ${numUserGuess}. ${count} guess(es) left. Guess a higher number.`;
        } else {
          message = `Your previous guess: ${numUserGuess}. ${count} guess(es) left. Guess a lower number.`;
        }
      }

      // print the message
      numUserGuess = parseInt(prompt(message));

      if (isNaN(numUserGuess) == true) {
        arrResult.push(numUserGuess);
        alert("You don't want to play? Okay! Bye!");
        return;
      } else {
        arrResult.push(numUserGuess);
      }

      // check the answer
      if (numUserGuess == secretNumber) {
        alert("You got the secret number!");
        return;
      }
      count--;
    }
  }
  makeGuess();
  console.log(arrResult);
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  resultDiv.innerHTML = `Your secret number was ${secretNumber}!`;
  let yourResult = document.createElement("p");
  yourResult.textContent = "The numbers you guessed were";
  for (let i = 0; i < arrResult.length; i++) {
    let eachEle = arrResult[i];
    console.log(eachEle);
    if (isNaN(eachEle) === true) {
      yourResult.innerHTML += " No number entered";
    } else if (i == arrResult.length - 1) {
      yourResult.innerHTML += ` and ${eachEle}.`;
    } else {
      yourResult.innerHTML += ` ${eachEle},`;
    }
    resultDiv.appendChild(yourResult);
  }
  console.log(resultDiv);
}

const startButton = document.getElementById("gameStart");
startButton.addEventListener("click", () => setTimeout(handleGuess, 1000));
