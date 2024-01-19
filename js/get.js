async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`La requête a échoué avec le statut ${res.status}`);
    }

    const data = await res.json();
    const userList = document.getElementById('userList');
    const listitem = document.createElement('li');
    data.forEach(user => {
      listitem.innerHTML += `
      <li><strong>Nom de l'utilisateur :</strong> ${user.name} <br></li>
      <li><strong>Email :</strong><a href="${user.email}">${user.email}<br></a></li>
      <li><strong>adresse :</strong>${user.address.street},${user.address.city},${user.address.zipcode}</li>
      `;
    });

    userList.appendChild(listitem);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error.message);
  }
}

fetchUsers();