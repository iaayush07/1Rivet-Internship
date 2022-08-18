console.log('Authenticated');

localStorage.setItem('isAuthenticate',true);

const container = document.getElementById('container');
const menu = document.getElementById('menu');

function onLogin(){
    localStorage.setItem('isAuthenticated',true);
    container.classList.remove(['d-none']);
    menu.classList.add(['d-none']);
}

function logout(){
    localStorage.setItem('isAuthenticated',false);
    container.classList.add(['d-none']);
    menu.classList.remove(['d-none']);
}