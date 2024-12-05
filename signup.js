document.getElementById('addPhotoBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Profile Picture';
            img.style.width = '12em'; // Adjust size as needed
            img.style.height = '12em'; // Adjust size as needed
            img.style.borderRadius = '50%'; // Make it circular
            img.style.objectFit = 'cover'; // Maintain aspect ratio

            const profilePicDiv = document.getElementById('profilePic');
            profilePicDiv.innerHTML = ''; // Clear existing SVG
            profilePicDiv.appendChild(img); // Add the uploaded image
        };
        reader.readAsDataURL(file);
    }
});

// Add event listener for the register button
document.getElementById('registerBtn').addEventListener('click', function() {
    // Gather input values
    const fullname = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Validate inputs (basic validation)
    if (!fullname || !address || !username || !phone || !password || !email) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can handle saving the data (e.g., send it to a server)
    // For demonstration, we'll just log it to the console
    const formData = {
        fullname,
        address,
        username,
        phone,
        password,
        email
    };

    console.log('Form Data:', formData);

    // Show SweetAlert message
    Swal.fire({
        title: 'Success!',
        text: 'You are registered!',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        // Redirect to login.html after the alert is closed
        window.location.href = 'login.html';
    });
});
