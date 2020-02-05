/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const baseUrl = 'http://localhost:3010/api/v1/auth';
const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');

if (signUpForm) {
  signUpForm.addEventListener('submit', async () => {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const lastname = document.getElementById('lastname').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        firstname, lastname, email, password,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
      .catch((err) => console.log(err));
    // save token in the local storage to be used for authorization
    localStorage.setItem('token', response.token);

    // save userid in the localstorage
    localStorage.setItem('userid', response.user.userId);

    // save username in the localstorage
    localStorage.setItem('username', response.user.firstname);
    if (response.message === 'Success') {
      // user dashboard link
      window.location = '../Login.html';
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`${baseUrl}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
}
