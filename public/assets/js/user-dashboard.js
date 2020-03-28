/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
const deleteRequestBtn = document.getElementById('deleteBtn');
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userid');
const logOut = document.getElementById('logout');
const baseUrl = 'http://localhost:3010/api/v1/users/requests';
if (!token) {
  window.location = '../LogIn.html';
}
const createRequestForm = document.getElementById('createRequest');
// createRequestBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   toggleModal('add-request');
// });
// Get all requests for user on page load
const getAllRequests = async () => {
  await fetch(`${baseUrl}/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'reload',
  }).then((response) => response.json())
    .then((response) => {
      // displayAlert(response.message, 2);
      console.log(response);
      response.requests.forEach((request) => {
        // format date
        const date = request.created_at.substr(0, 10);
        const tagger = document.getElementById('requestList');
        //  requests format
        tagger.innerHTML += ` <td>${request.title}</td>
        <td>${request.description}</td>
        <td>${request.category}</td>
        <td>${request.itemtype}</td>
        <td>${date}</td>
        <td>${request.status}</td>
        <td> <a class="btn btn-success" role="button" id="editBtn" href="">Edit</a> <a class="btn btn-danger" onclick="deleteRequest(${request.requestid})" role="button" href="#">Delete</a></td>
      </tr>`;
      });
    }).catch((err) => err);
};
getAllRequests();


/**
* Adds an eventListener with a callback to POST user inputs for new request creation
*
* @param {object} submitEvent - The submitEvent
*/
if (createRequestForm) {
  createRequestForm.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    const title = document.getElementById('title').value;
    const itemType = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    await fetch(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify(
        {
          title, itemType, description, category, userId,
        },
      ),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => console.log(response.json()))
      .then((response) => {
        if (response.code === 201) {
          displayAlert(response.message);
          window.location = '/dashboard';
        } else {
          displayAlert(response.message);
        }
      }).catch(() => {
        displayAlert('Error connecting to the network, please check your Internet connection and try again');
      });
  });
}

// Delete a particular request
// const requestId = localStorage.getItem('id');
const deleteRequest = async (requestId) => {
  await fetch(`${baseUrl}/${requestId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    cache: 'reload',
  }).then((response) => response.json())
    .then((response) => {
      if (response.code === 200) {
        displayAlert(response.message);
      } else {
        displayAlert('Couldn\'t Delete Request');
      }
    }).catch(() => {
      displayAlert('Error connecting to the network, please check your Internet connection and try again');
    });
};

// const deleteRequest = (requestId) => {
//   fetch(`${baseUrl}/users/requests/${requestId}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json', Authorization: token },
//     cache: 'reload',
//   }).then(response => response.json()).then((response) => {
//     if (response.code === 200) {
//       displayAlert(response.message);
//       getRequests();
//     } else {
//       displayAlert('Could not delete request');
//     }
//   }).catch(() => {
//     displayAlert('Error connecting to the network, please check your Internet connection and try again');
//   });
// };

// Logout users from the appplication
logOut.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('token', '');
  localStorage.setItem('userid', '');
  localStorage.setItem('username', '');
  window.location = '../LogIn.html';
});
