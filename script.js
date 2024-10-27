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

//     // Check for existing user after login
//     if (localStorage.getItem('username')) {
//         var button = document.getElementById('existing');
//         if (!button) {
//             button = document.createElement('button');
//             button.id = 'existing';
//             button.innerText = 'Login as existing user';
//             document.body.appendChild(button);

//             button.addEventListener('click', function() {
//                 var savedUsername = localStorage.getItem('username');
//                 alert('Logged in as ' + savedUsername);
//             });
//         }
//     }
// });

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('checkbox').checked;

	if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    alert('Logged in as ' + username);
    checkForExistingUser();
});

document.getElementById('existing').addEventListener('click', function() {
    var savedUsername = localStorage.getItem('username');
    alert('Logged in as ' + savedUsername);
});

function checkForExistingUser() {
    var button = document.getElementById('existing');
    if (localStorage.getItem('username')) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

window.onload = function() {
    if (!document.getElementById('checkbox').checked) {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    checkForExistingUser();
};