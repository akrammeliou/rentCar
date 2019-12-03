function profile() {
        let htmlprofile =`
        <img src="assets/images/icon-user.png" alt='' /> <span>Profile</span>
        `
        document.getElementById('user_profile').innerHTML = htmlprofile
}

/********* user profile ***********/

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

/********* Consult cars user profile ***********/
var cars = JSON.parse(localStorage.getItem('reservation')) || [];
var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];


cars.forEach(reservation => {
    if(connectedUser.id == reservation.owner) {
        console.log(reservation.owner);
        console.log(connectedUser.id);
        
    let tr = document.createElement('tr');
    
    let tdidvoiture = document.createElement("td");
    let tdResDebut = document.createElement("td");
    let tdResFin = document.createElement("td");

    let textidvoiture = document.createTextNode(reservation.idvoiture);
    let textResDebut = document.createTextNode(reservation.dateresrvationdebut);
    let textResFin = document.createTextNode(reservation.dateresrvationfin);
    
    tdidvoiture.appendChild(textidvoiture);
    tdResDebut.appendChild(textResDebut);
    tdResFin.appendChild(textResFin);
    
    tr.appendChild(tdidvoiture);
    tr.appendChild(tdResDebut);
    tr.appendChild(tdResFin);
    
    let body = document.getElementById("bodytable");
    body.appendChild(tr);    
}
})
;

/*********** List of users profile *************/

// let users = JSON.parse(localStorage.getItem("user"));
// users.forEach(user => {
//     let tr = document.createElement('tr');
    
//     let tdUsername = document.createElement("td");
//     let tdEmail = document.createElement("td");
//     let tdPassword = document.createElement("td");
    
//     let textUsername = document.createTextNode(user.username);
//     let textEmail = document.createTextNode(user.pass);
//     let textPassword = document.createTextNode(user.email);
    
//     tdUsername.appendChild(textUsername);
//     tdEmail.appendChild(textEmail);
//     tdPassword.appendChild(textPassword);
    
//     tr.appendChild(tdUsername);
//     tr.appendChild(tdEmail);
//     tr.appendChild(tdPassword);
    
//     let body = document.getElementById("bodytable");
//     body.appendChild(tr);    
// });