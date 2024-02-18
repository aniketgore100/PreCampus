document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Perform login authentication here
    // Redirect to another page after successful login
    window.location.href = "/Dropdown"; 
});
