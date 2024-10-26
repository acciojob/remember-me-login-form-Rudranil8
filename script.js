// document.getElementById('submit').addEventListener('click', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var rememberMe = document.getElementById('checkbox').checked;

//     if (rememberMe) {
//         localStorage.setItem('username', username);
//         localStorage.setItem('password', password);
//     } else {
//         localStorage.removeItem('username');
//         localStorage.removeItem('password');
//     }
//     alert('Logged in as ' + username);
// });

// document.getElementById('submit').addEventListener('click', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var rememberMe = document.getElementById('checkbox').checked;

//     if (rememberMe) {
//         localStorage.setItem('username', username);
//         localStorage.setItem('password', password);
//     } else {
//         localStorage.removeItem('username');
//         localStorage.removeItem('password');
//     }
//     alert('Logged in as ' + username);
// });
// if (localStorage.getItem('username')) {
//     var button = document.createElement('button');
//     button.id = 'existing';
//     button.innerText = 'Login as existing user';
//     document.body.appendChild(button);

//     button.addEventListener('click', function() {
//         var savedUsername = localStorage.getItem('username');
//         alert('Logged in as ' + savedUsername);
//     });
// }
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    alert('Logged in as ' + username);

    // Check for existing user after login
    if (localStorage.getItem('username')) {
        var button = document.getElementById('existing');
        if (!button) {
            button = document.createElement('button');
            button.id = 'existing';
            button.innerText = 'Login as existing user';
            document.body.appendChild(button);

            button.addEventListener('click', function() {
                var savedUsername = localStorage.getItem('username');
                alert('Logged in as ' + savedUsername);
            });
        }
    }
});