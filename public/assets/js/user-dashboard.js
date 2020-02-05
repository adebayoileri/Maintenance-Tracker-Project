/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const getAllRequestsBtn = document.getElementById('getAllRequests');
const baseUrl = 'http://localhost:3010/api/v1/users/requests';

getAllRequestsBtn.addEventListener('click', () => {
  fetch(`${baseUrl}/getAllRequests`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => console.log(res.json()))
    .catch((err) => console.log(err));
});
