document.querySelector('.form input[type=submit]').addEventListener('click', submitForm);
let inpObj = document.querySelector('.form input');

function submitForm(e) {
    e.preventDefault();
        alertify.set('notifier','position', 'top-right');

    if (!inpObj.checkValidity()) {
        alertify.error('Хибні дані');
    }
    else {
        let name = document.getElementById('name').value;
        alertify.success(name+", ми незабаром з Вами зв'яжемося.");
    }
}
