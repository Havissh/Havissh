function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        // You can add additional logic here, such as submitting the form to a server
        // Example: document.getElementById('myForm').submit();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
