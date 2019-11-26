function profile() {
    let tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];

        let htmlprofile =`
        <img src="assets/images/icon-user.png" alt='' /> <span>Profile</span>
        `
        document.getElementById('user_profile').innerHTML = htmlprofile
}

let user = JSON.parse(localStorage.getItem("connectedUser"));

let tdUsername = document.createElement("td");
let tdEmail = document.createElement("td");
let tdPassword = document.createElement("td");

let textUsername = document.createTextNode(user.username);
let textEmail = document.createTextNode(user.pass);
let textPassword = document.createTextNode(user.email);

tdUsername.appendChild(textUsername);
tdEmail.appendChild(textEmail);
tdPassword.appendChild(textPassword);

let tr = document.getElementById("trtable");
tr.appendChild(tdUsername);
tr.appendChild(tdEmail);
tr.appendChild(tdPassword);