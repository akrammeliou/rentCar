function authentificationUser() {
    var tab = JSON.parse(localStorage.getItem("user")) || [];
    var email = document.getElementById('Email').value;
    var passwordd = document.getElementById('pass2').value;

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].email == email && tab[i].pass == passwordd ) {
            if(tab[i].role == 'user'){
                localStorage.setItem('connectedUser', JSON.stringify(tab[i]));
                location.href = 'car-listing.html';
            }
            else if (tab[i].role == 'admin'){
                localStorage.setItem('connectedUser', JSON.stringify(tab[i]));
                location.href = '../royalcars/dist/projects/all.html';
            }
            else{
                alert('ERREUR CONNECT');
            }
            
        }
    }
}


               
