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

    let featured;
    if (option === 'option1') {
        backEnd.classList.remove('featured');
        // backEnd.style.visibility= "hidden";
        featured = frontEnd;
    } else {
        frontEnd.classList.remove('featured');
        // frontEnd.style.visibility= "hidden";
        featured = backEnd;
    }

    featured.classList.add('featured');
}