function affichermarque() {
  let todoList = JSON.parse(localStorage.getItem('Brands')) || []
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
  let marque = `<label for="Mark">Mark</label>
 <select class="form-control" id="typebien" onchange="affichermodele()">`
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].owner == connectedUser.id) {
      marque += `
        <option name="test" id="optiontest" value="${todoList[i].marque}">${todoList[i].marque}</option>
        `
    }
  }
  marque += `</select>`;
  document.getElementById('mark').innerHTML = marque;
}

function affichermodele() {

  var select = document.getElementById('typebien');
  var choice = select.selectedIndex;
  var id = select.options[choice].value;

  console.log(localStorage.setItem("idmarque", JSON.stringify(id)));
  console.log(localStorage.getItem('idmarque'))

  let todoList = JSON.parse(localStorage.getItem('Brands')) || []
  let todomarque = JSON.parse(localStorage.getItem('idmarque')) || []
  let modele = `<label for="Model">Modele</label> <select class="form-control" id="modele3">`


  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].marque == id) {
      var tab2 = todoList[i].model
      console.log(tab2);
      for (let j = 0; j < tab2.length; j++) {
        modele += `
        <option name="test" value="${tab2[j]}">${tab2[j]}</option>
        `
      }
    }
  }
  modele += `</select>`;
  document.getElementById('modele').innerHTML = modele


}

function insertvoiture() {
  var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
  let todoList = JSON.parse(localStorage.getItem('Brands')) || []
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];

  var select = document.getElementById('typebien');
  var choice = select.selectedIndex;
  var id = select.options[choice].value;

  var select2 = document.getElementById('modele3');
  var choice2 = select2.selectedIndex;
  var modelle = select2.options[choice2].value;
  console.log('bach ' + modelle);

  var voituer = {
    matricule: document.getElementById('matricule').value,
    owner: connectedUser.id,
    modele: modelle,
    marquevoiture: id,
    image: document.getElementById('carImg').files[0].name,
    id: Math.floor(Math.random() * 1000 + 1),
  }
  tabvoiture.push(voituer);
  localStorage.setItem("voituer", JSON.stringify(tabvoiture));
  alert('done');
  window.location.reload();
}

function affichagevoitureAdmin() {
  let htmladmin = `<h1>`;
  let html = ` <table class="table table-middle">
  <thead>
    <tr>
  <th>Matricule</th>
      <th>Marque</th>
      <th>Modele</th>
      <th>Progress</th>
    </tr>
  </thead> <tbody>`

  var tab = JSON.parse(localStorage.getItem("user")) || [];
  var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].id == connectedUser.id) {

      htmladmin += `<h5>Les voiture de l'admin est ${connectedUser.username}</h5>`;
      for (let j = 0; j < tabvoiture.length; j++) {
        console.log('bach voiture ' + tabvoiture[j].marquevoiture);
        html +=
          `<tr>
        <td id="name"> 
        ${tabvoiture[j].matricule}              
        </td>
        <td id="marque">
        <img src='../../assets/images/${tabvoiture[j].image}' class="img-thumb-sm mr-3">
        ${tabvoiture[j].marquevoiture}
          </td>
          <td>${tabvoiture[j].modele}</td>
        <td style="">
          <div class="py-1 px-1">
            <button class="btn btn-sm btn-flat-info btn-fab id="edit" onclick="ediiiit(${tabvoiture[j].id})" ><i class="material-icons">edit</i></button>
            <button class="btn btn-sm btn-flat-secondary btn-fab id="delete" onclick="delete_cars(${tabvoiture[j].id})" ><i class="material-icons">delete</i></button>
          </div>
        </td>
      </tr>`
      }
    }
  }
  htmladmin += `</h1>`
  html += `</tbody> </table>`;
  document.getElementById('tabvoiture').innerHTML = html
  document.getElementById('admintitle').innerHTML = htmladmin;
}
function delete_cars(id) {
  console.log(id);

  var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
  for (let j = 0; j < tabvoiture.length; j++) {
    if (tabvoiture[j].id === id) {
      tabvoiture.splice(j, 1);
    }
  }
  localStorage.setItem("voituer", JSON.stringify(tabvoiture));
  affichagevoitureAdmin()
}

function ediiiit(id) {
  var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
  let index
  for (let i = 0; i < tabvoiture.length; i++) {
    if (id == tabvoiture[i].id) {
      index = i
    }
  }
  let htmledit = `<table id="edittt">
      <tr>
      <td>
      <div class="imagePreview">
      <img id="output_image"/>
      </div>     
      <label class="btn btn-outline-primary"> Upload
      <input id='carImg' type="file" accept="image/*" onchange="preview_image(event)" class="uploadFile img" value="Upload Photo"
      style="width: 0px;height: 0px;overflow: hidden;">
      </label>
    
      </td>
      <td>
      </td>
        <td><input type="texte" class="form-control" id="matricule_edit" value="${tabvoiture[index].matricule}"></td>
        <td><input type="texte" class="form-control" id="mark_edit" value="${tabvoiture[index].marquevoiture}"> 
         <td><input type="texte" class="form-control" id="modele_edit" value="${tabvoiture[index].modele}"></td>
          <td>
          <input type="button" class="btn btn-primary" value="Edit" id="ediiit" onclick="modif(${tabvoiture[index].id})">
        </td>
      </tr>
  </table>`
  document.getElementById('editform').innerHTML = htmledit
}

function modif(id) {
  var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
  todo = {
    id: id,
    owner: JSON.parse(localStorage.getItem('connectedUser')).id,
    matricule: document.getElementById('matricule_edit').value,
    marquevoiture: document.getElementById('mark_edit').value,
    modele: document.getElementById('modele_edit').value,
    image: document.getElementById('carImg').files[0].name,
    // image: document.getElementById('image_edit')
  }
  for (let i = 0; i < tabvoiture.length; i++) {
    if (tabvoiture[i].id === id) {
      tabvoiture.splice(i, 1, todo);
    }
  }
  localStorage.setItem("voituer", JSON.stringify(tabvoiture));
  affichagevoitureAdmin();
  load()
}
function load() {
  window.location.reload()
}

function preview_image(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('output_image');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}