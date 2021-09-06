function onToggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('collapsible--expanded');
}

function onReadMore(element) {
    if (element.innerHTML === 'Read more...') {
        element.innerHTML = 'Show less';
    } else {
        element.innerHTML = 'Read more...';
    }

    let p = document.getElementById('theme').querySelectorAll('.collapsible__content');

    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('collapsible--expanded');
    }
}