document.querySelector('.form input[type=submit]').addEventListener('click', submitForm);
let inpObj = document.querySelector('.form input');

function submitForm(e) {
    e.preventDefault();

    if (!inpObj.checkValidity()) {
        alertify.set('notifier','position', 'top-right');
        alertify.error('Хибні дані');
    }
    else {
        fetch('form.php', {
                method: 'POST',
                body: new FormData(document.querySelector('.form'))
            })
            .then(response => response.text())
            .then(name => alertify.success(name));
    }
}
