window.addEventListener('DOMContentLoaded', startScript);

function startScript () {
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    
    option1.addEventListener('click', featureDiv);
    option2.addEventListener('click', featureDiv);
}

function featureDiv(event) {
    const frontEnd = document.querySelector('.front-end');
    const backEnd = document.querySelector('.back-end');
    const option = event.target.id;

    frontEnd.classList.remove('featured');

    backEnd.classList.remove('featured');

    (option === 'option1' ? frontEnd : backEnd
    ).classList.add('featured');
    console.log(option);
    console.log(event.target);
}