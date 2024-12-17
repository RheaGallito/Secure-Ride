// Modal functionality
const modal = document.getElementById('forgotPasswordModal');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const closeModal = document.getElementById('close-modal');

// Ensure modal is hidden on page load
modal.style.display = "none";

forgotPasswordBtn.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Update password functionality
document.getElementById('update-password-btn').addEventListener('click', function () {
  const newPassword = document.getElementById('new-password').value;

  if (registeredUser) {
    registeredUser.password = newPassword;
    localStorage.setItem('registeredUser', JSON.stringify(registeredUser));
    alert('Password updated successfully!');
    modal.style.display = "none";
  } else {
    alert('No registered user found.');
  }
});

