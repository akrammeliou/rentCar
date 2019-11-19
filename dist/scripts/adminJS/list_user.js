

function editInactif(id) {
  var list = JSON.parse(localStorage.getItem('user'))
  console.log(id);

  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      list[i].status = 'inactif'
      console.log(list[i].status == 'inactif')
      console.log(list[i])
    }

  }
  localStorage.setItem("user", JSON.stringify(list[i]));

  list = JSON.stringify(list)
  localStorage.setItem("user", list);
}
function editActif(id) {
  var list = JSON.parse(localStorage.getItem('user'))
  console.log(id);

  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      list[i].status = 'actif'
      console.log(list[i].status == 'actif')
      console.log(list[i])
    }

  }
  localStorage.setItem("user", JSON.stringify(list[i]));

  list = JSON.stringify(list)
  localStorage.setItem("user", list);
}
function afficheUser() {
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
            <button class="btn btn-sm btn-flat-info btn-fab ${list[i].status == 'actif' ? 'disable' : ''}" id="actif${list[i].id}" onclick="editActif(${list[i].id});" ><i class="material-icons">done</i></button>
            <button class="btn btn-sm btn-flat-secondary btn-fab ${list[i].status == 'inactif' ? 'disable2' : ''}" id="inactif${list[i].id}" onclick="editInactif(${list[i].id});" ><i class="material-icons">clear</i></button>
          </div>
        </td>
      </tr>`
  }
  document.getElementById('table').innerHTML = html;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == 'actif') {
      document.getElementById(`actif${list[i].id}`).style.cursor =  'not-allowed'

    }else {

      document.getElementById(`inactif${list[i].id}`).style.cursor =  'not-allowed'
    }
    
  }
  // for (let i = 0; i < list.length; i++) {
  //   console.log('bach' +list[i].status);
  //   if (list[i].status=='actif'){
  //       document.getElementById('actif').style.display = "none";
  //     }
  //     else {
  //     document.getElementById('inactif').disabled = false;
  //       document.getElementById('actif').disabled = true;
  //   }
  // }
}