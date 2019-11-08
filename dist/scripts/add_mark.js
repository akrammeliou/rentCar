function addShow() {
    console.log( document.getElementById("brand"));
    console.log( document.getElementById("tableau"));
    document.getElementById("brand").hidden = false;
    document.getElementById("tableau").hidden = true;
   
    console.log('ghrfhgfhgfgf');
}
function addbrands() {
    
    var brands = JSON.parse(localStorage.getItem('Brands')) || []
    var brand = document.getElementById('brands').value;
    var model = document.getElementById('model').value;
    model = model.split(',')
    var objet = {
        id: Math.floor(Math.random() * 1000 + 1),
        marque: brand,
        model: model
    }
    brands.push(objet)
    localStorage.setItem('Brands',JSON.stringify(brands))
}
