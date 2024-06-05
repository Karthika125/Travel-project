function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'Wellpoint' && password === 'Wp@2316') {
        // Redirect to another page upon successful login
        window.location.href = 'travel.html';
    } else {
       
        errorMessage.textContent = 'Invalid username or password!';
        }
    }

