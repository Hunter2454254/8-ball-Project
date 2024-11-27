document.getElementById("magicButton").addEventListener("click", function () {
    // Get user name and question
    const userName = document.getElementById("username").value.trim();
    const userQuestion = document.getElementById("userQuestion").value.trim();

    // Greet the user
    const greeting = userName ? `Hello, ${userName}!` : "Hello!";
    console.log(greeting);

    // Ensure a question was asked
    if (!userQuestion) {
        document.getElementById("answer").textContent = "Please ask a question!";
        return;
    }

    console.log(`${greeting} You asked: ${userQuestion}`);

    // Generate a random number between 0 and 7
    const randomNumber = Math.floor(Math.random() * 8);

    // Determine the Magic 8-Ball's response
    let eightBall;
    switch (randomNumber) {
        case 0:
            eightBall = "It is certain.";
            break;
        case 1:
            eightBall = "It is decidedly so.";
            break;
        case 2:
            eightBall = "Reply hazy, try again.";
            break;
        case 3:
            eightBall = "Cannot predict now.";
            break;
        case 4:
            eightBall = "Do not count on it.";
            break;
        case 5:
            eightBall = "My sources say no.";
            break;
        case 6:
            eightBall = "Outlook not so good.";
            break;
        case 7:
            eightBall = "Signs point to yes.";
            break;
        default:
            eightBall = "Error.";
            break;
    }

    // Display the answer
    document.getElementById("answer").textContent = `The Magic 8-Ball says: "${eightBall}"`;
});
