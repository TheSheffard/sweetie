document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById("loginPassword");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const password;
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
           const email = loginEmail.value;
           const password = loginPassword.value;
            if (emailRegex.test(email) && password==="12345"){
                localStorage.setItem("loginEmail", email);
                localStorage.setItem("loginPassword", password);
                window.location.href= "home.html";
            }else{
                alert("invalid password");
            }
        });
    }
})