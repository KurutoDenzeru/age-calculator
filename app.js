// Function declaration to calculate age based on birth year
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const birthdateThisYear = new Date(currentYear, 0, 1); // January 1st of the current year
    const userBirthdate = new Date(birthYear, 0, 1); // January 1st of the input birth year

    // Compare the birthdate to the current date
    const age = currentYear - birthYear - (userBirthdate > birthdateThisYear ? 0 : 1);

    return age;
}

// Event listener for the button click using a function expression
document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get the input value
    const birthYearInput = document.getElementById('birthdate');
    const birthYear = parseInt(birthYearInput.value);

    // Check if the input is a valid number
    if (!isNaN(birthYear) && birthYear > 0) {
        // Calculate the age using the declared function
        const age = calculateAge(birthYear);

        // Display the result
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Your age is: ${age} years.`;
    } else {
        // Display an error message for invalid input
        alert('Please enter a valid birth year.');
    }
});

// Note: The function used in addEventListener is an example of a function expression.
// It is defined at runtime and assigned to the event listener.
// Arrow functions could also be used for concise expressions like this,
// but they might behave differently regarding the 'this' keyword, depending on the context.
