// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get the form elements
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');
    const registerBtn = document.querySelector('.registerbtn');

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Get values from inputs
        const email = emailInput.value.trim();
        const password = passInput.value.trim();

        // Validate the inputs
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Form data is valid, display success message
        alert('Registration successful!');
        // Here you could also send the data to a server if desired
    }

    // Attach the event listener to the button
    registerBtn.addEventListener('click', handleFormSubmit);
});
