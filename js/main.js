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

let modal = document.getElementById('myModal');

function onClick(element) {
    let container = document.getElementById('modalImg');
    container.src = element.src;
    modal.style.display = 'block';
}

function onClose() {
    modal.style.display = 'none';
}