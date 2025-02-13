<script>
    function saveInput() {
        let email = document.getElementById("contact_email").value;
        let message = document.getElementById("contact_message").value;

        if(email.trim() == "" || message.trim() == "") {
            alert("Please enter an email and a message");
            return;
        }

        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedMessage", message);
   }


window.onload = function () {
    // Hide the loading screen after the page loads
    setTimeout(() => {
        document.getElementById("loading_screen").style.display = "none";
    }, 1000); // Adjust the delay (in milliseconds) if needed
};

</script>