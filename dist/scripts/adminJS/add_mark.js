function addShow() {
    console.log( document.getElementById("brand"));
    console.log( document.getElementById("tableau"));
    document.getElementById("brand").hidden = false;
    document.getElementById("tableau").hidden = true;
   
    console.log('ghrfhgfhgfgf');
}
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


function afficheUser() {
    console.log("test");
  
    var user = JSON.parse(localStorage.getItem('user')) 
  
    var html = ` <thead>
    <tr>
  <th>Username</th>
      <th>Email</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>`
  var list = JSON.parse(localStorage.getItem('user')) || []
    for (let i = 0; i < list.length; i++) {
            html += `<tr>
            <td id="name">  
            ${list[i].username}              
            </td>
            <td id="email">
              <img src="http://via.placeholder.com/256x256" alt="" class="img-thumb-sm mr-3">
              ${list[i].email}  
             </td>
            <td style="">
              <div class="py-1 px-1">
                <button class="btn btn-sm btn-flat-info btn-fab"><i class="material-icons">done</i></button>
                <button class="btn btn-sm btn-flat-secondary btn-fab"><i class="material-icons">clear</i></button>
              </div>
            </td>
          </tr>`

    }
    document.getElementById('table').innerHTML = html;

}