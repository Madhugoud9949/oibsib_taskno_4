const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function registerUser() {
    const username = document.getElementById("registrationUsername").value;
    const password = document.getElementById("registrationPassword").value;

    if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose a different username.");
    } else {
 
        users.push({ username, password });
        alert("Registration successful! You can now log in.");
        showLogin(); 
    }
}

function loginUser() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        
        document.getElementById("registrationPage").style.display = "none";
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function logoutUser() {
    
    document.getElementById("registrationUsername").value = "";
    document.getElementById("registrationPassword").value = "";
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";

    
    document.getElementById("registrationPage").style.display = "block";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "none";
}

function showLogin() {
  
    document.getElementById("registrationPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("homePage").style.display = "none";
}

function showRegistration() {
  
    document.getElementById("registrationPage").style.display = "block";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "none";
}


showRegistration();
