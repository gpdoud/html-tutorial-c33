const chkPassword = () => {
    let password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(password !== password2) {
        alert("Passwords don't match!");
    }
}

const save = () => {
    let user = {};
    user.id = +document.getElementById("xid").value;
    user.username = document.getElementById("xusername").value;
    user.password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(user.password !== password2) {
        return;
    }
    user.firstname = document.getElementById("xfirstname").value;
    user.lastname = document.getElementById("xlastname").value;
    user.phone = document.getElementById("xphone").value;
    user.email = document.getElementById("xemail").value;
    user.isReviewer = document.getElementById("xisreviewer").checked;
    user.isAdmin = document.getElementById("xisadmin").checked;
    console.log(user);

    window.location.href = "user-list.html";
}