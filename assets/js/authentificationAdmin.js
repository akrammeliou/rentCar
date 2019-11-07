function authentificationAdmin() {
    var Email = document.getElementById('Email').value;
    var passWord = document.getElementById('pass2').value;
    var admin = {
        id: Math.floor(Math.random() * 1000 + 1),
        passWordadmin: 'bach',
        adressMailadmin: 'med',
        role: 'Admin'
    }
    console.log(admin.adressMailadmin);
    console.log(admin.passWordadmin);

    if (admin.passWordadmin == passWord && admin.adressMailadmin == Email && admin.role == 'Admin') {
        location.href = 'file:///C:/Users/Bach/Desktop/rentCar/dist/dashboard/index.html';
        localStorage.setItem('connectedAdmin', JSON.stringify(admin));
    }
    else {
        alert('erreur authentification');
    }



}