function validateForm(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    let passwordPattern = /^(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailPattern.test(email)) {
        alert("Email must contain '@gmail.com'");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one number.");
        return false;
    }

    alert("Form submitted successfully!");
    document.getElementById("login").submit();
    return true;
}