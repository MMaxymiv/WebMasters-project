document.querySelector('.form input[type=submit]').addEventListener('click', submitForm);
let inpObj = document.querySelector('.form input');

function submitForm(e) {
    e.preventDefault();

    if (!inpObj.checkValidity()) {
        alert('Хибні дані.');
    }
    else {
        fetch('form.php', {
                method: 'POST',
                body: new FormData(document.querySelector('.form'))
            })
            .then(response => response.text())
            .then(name => alert(name));
    }
}

let header = document.querySelector('.header');
let wrapperMenu = document.querySelector('.wrapper-menu');
let topMenu = document.querySelector('.top-menu');
