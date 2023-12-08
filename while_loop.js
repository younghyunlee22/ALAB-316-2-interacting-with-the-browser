function handleGuess() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(secretNumber);
  let count = 6;
  let arrResult = [];

  let numUserGuess = parseInt(prompt("Enter a number"));
  arrResult.push(numUserGuess);
  function makeGuess() {
    while (count > 0) {
      if (numUserGuess == secretNumber) {
        alert("You got the secret number!");
        return;
      }
      if (isNaN(numUserGuess) === true) {
        alert("You don't want to play? Okay! Bye!");
        return;
      } else if (numUserGuess > secretNumber) {
        numUserGuess = parseInt(
          prompt(
            `You have guessed ${numUserGuess}! ${count} guess(es) left. Guess a lower number: `
          )
        );
      } else if (numUserGuess < secretNumber) {
        numUserGuess = parseInt(
          prompt(
            `You guessed ${numUserGuess}! ${count} guess(es) left. Guess a higher number: `
          )
        );
      } else {
        alert("You got the secret number!");
        return;
      } // bug: if the user guesses the secret number on the last attempt, the else block will not run
      arrResult.push(numUserGuess);
      count--;
      console.log(arrResult);
    }

    // dealing with the bug using an if statement here.
    if (numUserGuess === secretNumber) {
      alert("You got the secret number!");
      return;
    } else if (count == 0) {
      alert(`You lost. Your secret number was ${secretNumber}.`);
    }
  }
  makeGuess();
  console.log(arrResult);
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  resultDiv.textContent = `Your secret number was ${secretNumber}!`;
  let yourResult = document.createElement("p");
  yourResult.textContent = "The numbers you guessed were";
  for (let i = 0; i < arrResult.length; i++) {
    let eachEle = arrResult[i];
    console.log(eachEle);
    if (isNaN(eachEle) === true) {
      yourResult.textContent += " No number entered";
    } else if (i == arrResult.length - 1) {
      yourResult.textContent += ` and ${eachEle}.`;
    } else {
      yourResult.textContent += ` ${eachEle},`;
    }
    resultDiv.appendChild(yourResult);
  }
  console.log(resultDiv);
}

const startButton = document.getElementById("gameStart");
startButton.addEventListener("click", () => setTimeout(handleGuess, 1000));
