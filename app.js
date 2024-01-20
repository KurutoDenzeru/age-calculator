// Function Declaration: Defines a named function to calculate age based on birth year.
function calculateAge(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Create Date objects for January 1st of the current and input birth years
    const birthdateThisYear = new Date(currentYear, 0, 1); // January 1st of the current year
    const userBirthdate = new Date(birthYear, 0, 1); // January 1st of the input birth year

    // Calculate age by comparing birthdate to the current date
    const age = currentYear - birthYear - (userBirthdate > birthdateThisYear ? 0 : 1);

    return age;
}

// Event Listener for Button Click: Listens for a button click event and executes the associated function.
document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get the input value for birth year
    const birthYearInput = document.getElementById('birthdate');
    const birthYear = parseInt(birthYearInput.value);

    // Check if the input is a valid positive number
    if (!isNaN(birthYear) && birthYear > 0) {
        // Calculate the age using the declared function
        const age = calculateAge(birthYear);

        // Display the calculated age result
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Your age is: ${age} years.`;
    } else {
        // Display an error message for invalid input
        alert('Please enter a valid birth year.');
    }
});
