
// Get all elements with class name "login"
var loginElements = document.getElementsByClassName("login");

// Iterate over the collection and attach event listener to each element
for (var i = 0; i < loginElements.length; i++) {
    loginElements[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of following the link

        // Define the URL of the login page
        var url = "../home/login.html";

        // Redirect to the login page
        window.location.href = url;
    });
}



// contact us form
document.getElementById("contact-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});
