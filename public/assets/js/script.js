/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/**
 * Displays a custom message
 *
 * @param {string} message - The message to be displayed on the alert
 */
const displayAlert = (message, type = 1) => {
  document.getElementById('display').className = 'show';
  const alert = document.getElementById('alert');
  switch (type) {
    case 2:
      document.getElementById('display').style.backgroundColor = '#2ecc71';
      alert.innerHTML = message;
      break;
    case 3:
      document.getElementById('display').style.backgroundColor = '#E74C3C';
      alert.innerHTML = message;
      break;
    default:
      document.getElementById('display').style.backgroundColor = '#3498db';
      alert.innerHTML = message;
      break;
  }
  setTimeout(() => {
    document.getElementById('display').className = '';
  }, 4000);
};

const toggleModal = (id) => {
  if (document.getElementById('modal').style.display === 'block') {
    document.getElementById('modal').style.display = 'none';
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById('modal').style.display = 'block';
    document.getElementById(id).style.display = 'block';
  }
};
