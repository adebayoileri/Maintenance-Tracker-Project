/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const baseUrl = 'http://localhost:3010/api/v1/auth';
const signUpForm = document.getElementById('signUpForm');

if (signUpForm) {
  signUpForm.addEventListener('submit', () => {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const lastname = document.getElementById('lastname').value;
    const password = document.getElementById('password').value;

    fetch(`${baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        firstname, lastname, email, password,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  });
}
