let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    search.classList.remove('active');
}


let loggedIn = false; 
if (!loggedIn) {
    document.querySelector('.header .flex .profile .name').style.display = 'none';
    document.querySelector('.header .flex .profile .btn').style.display = 'none';
}

let search = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    search.classList.remove('active');

    if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.querySelector('#loginForm');
    const loginMessage = document.querySelector('#loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

           
            loginMessage.textContent = 'Login Successful';

            
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        });
    }

    
    const registerForm = document.querySelector('#registerForm');
    const registerMessage = document.querySelector('#registerMessage');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

           
            registerMessage.textContent = 'Registration Successful';
            registerMessage.style.display = 'block';

     
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        });
    }
});
