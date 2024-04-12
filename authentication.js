
 function handleSignup() {
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    if (username === "" || email === "" || password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all the input fields!',
        });
    } else {
        let logo = document.getElementById('logo');
        if (logo) {
            logo.textContent = username;
        } else {
            console.error("Element with ID 'logo' not found.");
        }
        localStorage.setItem('name', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: `Welcome, ${username}! You have successfully signed up.`,
        }).then(() => {
            let loginform = document.getElementById('login-form');
            let signupform = document.getElementById('signup-form');
            if (signupform && loginform) {
                signupform.style.display = 'none';
                loginform.style.display = 'block';
                // window.location.href = "index.html";
            } else {
                console.error("Login or signup form element not found.");
            }
        });
    }
}


 function handlelogin() {
    let login_email = document.getElementById('login_email').value;
    let login_password = document.getElementById('login_password').value;
    if (login_email === localStorage.getItem('email') && login_password === localStorage.getItem('password')) {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: `Welcome, ${login_email}! You have successfully logged in.`,
        }).then(() => {
            window.location.href = "index.html";
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect email or password!',
        });
    }
};



 function showLoginForm() {
    let loginform = document.getElementById('login-form');
    let signupform = document.getElementById('signup-form');
    
    signupform.style.display = 'none';
    loginform.style.display = 'block';
}

 function showsignupForm() {
    let loginform = document.getElementById('login-form');
    let signupform = document.getElementById('signup-form');
    
    signupform.style.display = 'block';
    loginform.style.display = 'none';
}

function logoutuser() {
    var logoutConfirmed = confirm("Are You Sure To Logout");
    if (logoutConfirmed) {
        window.location.href = "login.html";
        return;
    }
}

