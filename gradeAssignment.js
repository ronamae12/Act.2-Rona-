// gradeAssignment.js

// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Check the score and log the corresponding grade
if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80 && score < 90) {
    console.log("Your grade is: Good.");
} else if (score >= 70 && score < 80) {
    console.log("Your grade is: Fair.");
} else if (score < 70) {
    console.log("Your grade is: Needs Improvement.");
} else {
    console.log("Invalid input. Please enter a valid score.");
}