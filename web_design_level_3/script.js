
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name=="" || email=="" || phone=="" || message==""){

        alert("Please fill in all fields.");

        return false;
    }

    alert("Thank you! Your message has been submitted successfully.");

    return true;
}