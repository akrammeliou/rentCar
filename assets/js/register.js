function register() {

    var password = document.getElementById('pass').value;
    console.log(password);
    var tab = JSON.parse(localStorage.getItem('user')) || [];
    var username = document.getElementById('userName').value;
    var adressMail = document.getElementById('adressMail').value;



    var user = {
        id: Math.floor(Math.random() * 1000 + 1),
        username: username,
        pass: password,
        email: adressMail,
        role:'user',
        status:'inactif'
    }

    tab.push(user);
    localStorage.setItem("user", JSON.stringify(tab));
    console.log(tab);
    location.href = './login-register.html'
}