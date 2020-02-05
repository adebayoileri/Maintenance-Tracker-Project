/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const baseUrl = 'http://localhost:3010/api/v1/auth';
const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');

if (signUpForm) {
  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const lastname = document.getElementById('lastname').value;
    const password = document.getElementById('password').value;

    await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        firstname, lastname, email, password,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json())
      .then((response) => {
        if (response.message === 'Success') {
          displayAlert('Signup Successful', 2);
          // user dashboard link
          setTimeout(() => {
            window.location = '../Login.html';
          }, 10);
          // save token in the local storage to be used for authorization
          localStorage.setItem('token', response.token);

          // save userid in the localstorage
          localStorage.setItem('userid', response.user.userid);

          // save username in the localstorage
          localStorage.setItem('username', response.user.firstname);
        }
      })
      .catch(() => displayAlert('Error connecting to the network, please check your Internet connection and try again'));
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`${baseUrl}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json())
      .then((response) => {
        if (response.message === 'Login Successful') {
          window.localStorage.token = response.token;
          displayAlert(`Welcome ${response.userData.firstname}, your signup was Successful`, 2);
          setTimeout(() => {
            window.location = '../dashboard.html';
          }, 10);
        } else {
          displayAlert(response.message, 3);
        }
      })
      .catch((err) => console.log(err));
  });
}
