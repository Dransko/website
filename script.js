document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading_screen").style.display = "none";
    }, 1000);
});

function saveInput() {
    let email = document.getElementById("contact_email").value;
    let message = document.getElementById("contact_message").value;

    if (email.trim() === "" || message.trim() === "") {
        alert("Please enter an email and a message");
        return;
    }

    // API Gateway URL
    const apiUrl = "https://8lg1w0hyd1.execute-api.us-east-1.amazonaws.com/prod";  // Replace with your actual API Gateway endpoint

    // Data to send
    const data = {
        email: email,
        message: message
    };

    // Send a POST request to the Lambda function
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success:", result);
        alert("Message saved successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error saving message. Please try again.");
    });
}
