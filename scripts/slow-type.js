let bio = biography(); // from bio.js

// function takes dom node and text to display as string
function slowType(node, string, typeRate = 125) {
    const array = string.split('').map((char, index) => string[index-1] === ' ' ? ' ' + char : char);
    array.forEach((character, index) => {
        setTimeout((c) => {
            // sets innertext to array one character at a time at a rate of typeRate
            node.innerText = node.innerText + character;
        }, (index + 1) * typeRate);
    });
    let yesNo = 'Y/n'.split('');
    const endLink = document.querySelector('#contact-link');
    yesNo.forEach((character, index) => {
        setTimeout((c) => {
            // sets innertext to array one character at a time at a rate of typeRate
            endLink.innerText = endLink.innerText + character;
        }, (index + array.length + 1) * typeRate);
    });
}

function fakeType(node, char) {
    node.innerText = node.innerText + char;
}

let div = null;
window.addEventListener('DOMContentLoaded', () => {
    bio = bio.split('').map((char, index) => bio[index-1] === ' ' ? ' ' + char : char);

    const body = document.querySelector('body');
    const skip = document.querySelector('#skip');
    const fakeTypeDiv = document.querySelector('#fake-type');

    const handleKeyDown = (event) => {

        if (event.key === 'Escape' || !bio.length) {
            skipToEnd();
        } else {
            const char = bio.shift();
            fakeType(fakeTypeDiv, char);
        };
    };

    const skipToEnd = (event) => {
        body.removeEventListener('keydown', handleKeyDown);
        skip.removeEventListener('click', skipToEnd);
        skip.removeAttribute('id');
        document.querySelector('#code').classList.add('expanded');
        slowType(fakeTypeDiv, bio.join(''), 10);
    }

    body.addEventListener('keydown', handleKeyDown);
    skip.addEventListener('click', skipToEnd);
});
