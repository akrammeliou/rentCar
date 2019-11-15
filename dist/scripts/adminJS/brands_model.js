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
    marquevoiture:id,

  }
  tabvoiture.push(voituer);
  localStorage.setItem("voituer", JSON.stringify(tabvoiture));
  alert('done');
}
