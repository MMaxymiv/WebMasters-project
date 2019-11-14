wrapperMenu.addEventListener('click', function() {
    wrapperMenu.classList.toggle('open');
    if ((header.classList.contains('open'))) {
        topMenu.classList.remove('open');
        header.classList.remove('open');
        header.classList.toggle('hide');
        return;
    }
    else {
        topMenu.classList.toggle('open');
        header.classList.remove('hide');
        header.classList.toggle('open');
    }
});