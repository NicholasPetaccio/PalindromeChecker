//Handle what happens when a user inputs text and presses enter
document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
    //Extract the value of the user input.
    let userInput = document.getElementById("userInput").value;
    console.log(userInput); //Debugging log

    //Remove all spaces, symbols, and numbers from user input, then split it into seperate characters in an array.
    const trimmedInput = userInput.replace(/[^A-Za-z]/g, "").toUpperCase().split("");
    console.log(trimmedInput); //Debugging log

    let isPalindrome = true;
    for (let i = 0; i < trimmedInput.length / 2; i++) {
        if (trimmedInput[i] !== trimmedInput[trimmedInput.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    //Check if the user input is a palindrome and return a response.
    let answer = document.getElementById("answer");
    if (isPalindrome) {
        answer.textContent = "Yes! That's a palindrome!"
    } else {
        answer.textContent = "No, that is not a palindrome."
    }
});