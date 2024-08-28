//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // prevent form from submitting and refreshing the page

    // get the username, password, and checkbox values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        // if checkbox is checked, save username and password in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // if checkbox is not checked, remove username and password from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // show an alert
    alert('Logged in as ' + username);
});