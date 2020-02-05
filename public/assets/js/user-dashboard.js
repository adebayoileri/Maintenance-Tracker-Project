/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// const getAllRequestsBtn = document.getElementById('getAllRequests');
// const baseUrl = 'http://localhost:3010/api/v1/users/requests';
const token = localStorage.getItem('token');

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
