function affichermarque() {
  let todoList = JSON.parse(localStorage.getItem('Brands')) || []
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
  let marque = `<label for="Mark">Mark</label>
     <select class="form-control" onchange='affichermodele()' id="typebien" >`
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].owner == connectedUser.id) {
      marque += `
        <option name="test" id="optiontest"  value="${todoList[i].id}">${todoList[i].marque}</option>
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
  console.log("test" + id);
  console.log(localStorage.setItem("idmarque", JSON.stringify(id)));
  console.log(localStorage.getItem('idmarque'))

  let todoList = JSON.parse(localStorage.getItem('Brands')) || []

  //  let todomarque = JSON.parse(localStorage.getItem('idmarque')) || []
  let modele = `<label for="Model">Modele</label> <select class="form-control">`
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      console.log(todoList[i]);
      let list = todoList[i].model
      for (let j = 0; j < list.length; j++) {
        modele += `
          <option name="test" value="${list[j]}">${list[j]}</option>
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
  var voituer = {
    matricule: document.getElementById('matricule').value,
    owner: connectedUser.id,
    modele: document.getElementById('modele').value,
    marquevoiture: id
  }
  tabvoiture.push(voituer);
  localStorage.setItem("voituer", JSON.stringify(tabvoiture));
  alert('done');
}

// function affichermarque() {
//   let todoList = JSON.parse(localStorage.getItem('Brands')) || []
//   var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
//   let marque = `<label for="Mark">Mark</label>
//  <select class="form-control" id="typebien" >`
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i].owner == connectedUser.id) {
//       marque += `
//         <option name="test" id="optiontest" onclick="affichermodele(${todoList[i].id})" value="${todoList[i].id}">${todoList[i].marque}</option>
//         `
//     }
//   }
//   console.log("test");

//   marque += `</select>`;
//   document.getElementById('mark').innerHTML = marque;
// }
// function affichermodele(id) {
//   console.log(id);

//   // var select = document.getElementById('typebien');
//   // var choice = select.selectedIndex;
//   // var id = select.options[choice].value;
//   // console.log(localStorage.setItem("idmarque", JSON.stringify(id)));
//   // console.log(localStorage.getItem('idmarque'))

//   let todoList = JSON.parse(localStorage.getItem('Brands')) || []

//   let modele = `<label for="Model">Modele</label> <select class="form-control">`
//   for (let i = 0; i < todoList.length; i++) {
//     console.log(todoList[i].id == id);
//     // console.log(todoList[i].id, id);

//     if (todoList[i].id == id) {
//       // let list = todoList[i].model;
//       // console.log(list);

//       // for (let j = 0; j < list.length; j++) {
//         modele += `
//           <option name="test" value="${todoList[i]}">${todoList[i]}</option>
//           `


//       // }
//     }
//   }
//   modele += `</select>`;
//   document.getElementById('modele').innerHTML = modele

// }
// function insertvoiture() {
//   var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];
//   let todoList = JSON.parse(localStorage.getItem('Brands')) || []
//   var connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || [];
//   var select = document.getElementById('typebien');
//   var choice = select.selectedIndex;
//   var id = select.options[choice].value;
//   var voituer = {
//     matricule: document.getElementById('matricule').value,
//     owner: connectedUser.id,
//     modele: document.getElementById('modele').value,
//     marquevoiture: id

//   }
//   tabvoiture.push(voituer);
//   localStorage.setItem("voituer", JSON.stringify(tabvoiture));
//   alert('done');

// }  
