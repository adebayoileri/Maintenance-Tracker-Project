/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
// const deleteRequestBtn = document.getElementById('deleteBtn');
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


/**
 *  Get all requests for user on page load
*/

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
      const log = response.requests.length;
      console.log(log);
      const tagger = document.getElementById('requestList');
      response.requests.forEach((request) => {
        // format date
        const date = request.created_at.substr(0, 10);
        //  requests format
        tagger.innerHTML += ` <tr>
          <td>${request.title}</td>
        <td>${request.description}</td>
        <td>${request.category}</td>
        <td>${request.itemtype}</td>
        <td>${date}</td>
        <td>${request.status}</td>
        <td> <a class="btn btn-success" role="button" id="editBtn" href="/request/edit/${request.requestid}">Edit</a> <a class="btn btn-danger" onclick="deleteRequest(${request.requestid})" role="button" href="#">Delete</a></td>
      </tr>`;
      });
      // const notagger = document.getElementById('noRequest');
      // notagger.innerHTML += `<h3>${response.message}</h3>`;
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
          displayAlert(response.message, 1);
          setTimeout(() => {
            window.location = '../dashboard.html';
          }, 1000);
        } else {
          displayAlert(response.message);
        }
      }).catch(() => {
        displayAlert('Error connecting to the network, please check your Internet connection and try again');
      });
  });
}

// eslint-disable-next-line no-unused-vars
const getSingleRequest = async (requestId) => {
  await fetch(`${baseUrl}/${requestId}`, {
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
    }).catch((err) => err);
};


/**
  * Delete a particular request
  * @param {Object} requestId
  */

// eslint-disable-next-line no-unused-vars
const deleteRequest = async (requestId) => {
  await fetch(`${baseUrl}/${requestId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    cache: 'reload',
  }).then((response) => response.json())
    .then((response) => {
      if (response.code === 200) {
        displayAlert(response.message, 1);
      } else {
        displayAlert('Couldn\'t Delete Request');
      }
    }).catch(() => {
      displayAlert('Error connecting to the network, please check your Internet connection and try again');
    });
};


// Logout users from the appplication
logOut.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('token', '');
  localStorage.setItem('userid', '');
  localStorage.setItem('username', '');
  window.location = '../LogIn.html';
});
