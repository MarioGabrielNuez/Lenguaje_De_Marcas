const toggleButton = document.getElementById('button-menu');
const navWrapper = document.getElementById('nav');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('close');
    navWrapper.classList.toggle('show');
})

navWrapper.addEventListener('click', e => {
    if (e.target.id === 'nav') {
        navWrapper.classList.remove('show');
        toggleButton.classList.remove('close');
    }
})

//Buscador
const inputSearch = document.getElementById('buscar')

inputSearch.addEventListener('keyup', filtro);

function filtro (){
    let valorinput = inputSearch.value;
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].innerHTML.includes(valorinput)){
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}