function addbrands() {
    var brands = JSON.parse(localStorage.getItem('Brands')) || []
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
    var brand = document.getElementById('brands').value;
    var model = document.getElementById('model').value;
    model = model.split(',')
    
    var objet = {
        id: Math.floor(Math.random() * 1000 + 1),
        marque: brand,
        model: model,
        owner:connectedUser.id
    }

    brands.push(objet)
    localStorage.setItem('Brands',JSON.stringify(brands))
}