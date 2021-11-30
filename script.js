/* Mobile menu settings*/

let menutoggle = document.querySelector('.min_menu');
let navigation = document.querySelector('.navigation');
menutoggle.onclick = function() {
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
};

/* Realise change theme with use LocalStorage*/

document.querySelector('.themeSwitch').addEventListener('click', (e)=> {
    e.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    addDarkToBody();
});

function addDarkToBody() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('body').classList.add('dark');
            document.querySelector('.themeSwitch').classList.add('active');
        } else {
            document.querySelector('body').classList.remove('dark');
            document.querySelector('.themeSwitch').classList.remove('active');
        }
    } catch (err) { }
}

addDarkToBody();