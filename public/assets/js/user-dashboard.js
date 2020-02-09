/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// const getAllRequestsBtn = document.getElementById('getAllRequests');
// const baseUrl = 'http://localhost:3010/api/v1/users/requests';
const token = localStorage.getItem('token');
const logOut = document.getElementById('logout');
// const userId = localStorage.getItem('userid');
// const token = `Bearer ${localStorage.token}`;
if (!token) {
  window.location = '../Sign.html';
}

// getAllRequestsBtn.addEventListener('click', () => {
//   fetch(`${baseUrl}/getAllRequests`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   }).then((res) => console.log(res.json()))
//     .catch((err) => console.log(err));
// });
// console.log(token);

// const getAllRequests = async () => {
//   await fetch(baseUrl, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `bearer ${token}`,
//     },
//     cache: 'reload',
//   }).then((response) => response.json())
//     .then((response) => {
//       displayAlert(response.message, 2);
//     }).catch((err) => err);
// };


// Logout users from the appplication
logOut.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('token', '');
  localStorage.setItem('userid', '');
  localStorage.setItem('username', '');
  window.location = '../LogIn.html';
});
