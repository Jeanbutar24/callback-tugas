const ajx = new XMLHttpRequest();
ajx.addEventListener("load", function () {
  const dataAjax = JSON.parse(ajx.responseText);
  const lokasiTable = document.getElementById("app");
  lokasiTable.innerHTML = dataTable(dataAjax);
});

ajx.open("GET", "https://jsonplaceholder.typicode.com/users");
ajx.send();

function dataTable(e) {
  return `
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       ${e.map((user, index) => {
         return `
       <tr ${(key = index)}>  
      <th>${user.id}</th>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.address.street},${user.address.suite},${user.address.city}</td>
      <td>${user.company.name}</td>
      </tr>
      `;
       })}
    </tr>
  </tbody>
</table>
    
    `;
}
