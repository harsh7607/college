const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu li').forEach((menu) => {
    menu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.querySelector('.social-media').addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        navMenu.classList.remove('active');
    }
});






const modal = document.getElementById("modal");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const btn = document.getElementById("btn");

function showModal() {
    modal.style.display = "flex";
    showLogin();
}

function hideModal() {
    modal.style.display = "none";
}

function showLogin() {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    btn.style.left = "0px";
}

function showSignUp() {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    btn.style.left = "110px";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        hideModal();
    }
};