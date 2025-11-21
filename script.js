function lowerCase() {
    let lowerInput = document.getElementById('lowerInput');
    lowerInput.value = lowerInput.value.toLocaleLowerCase('tr');
}

function upperCase() {
    let upperInput = document.getElementById('upperInput');
    upperInput.value = upperInput.value.toLocaleUpperCase('tr');
}


let fullText = 'Lorem, ipsum dolor sit amet consec etur adipi sicing elit. Laudantium amet, eaque dolores, mollitia aliquam aut alias cumque, commodi quisquam nemo quos minima voluptatem numquam ex illo nulla ea exercitationem!';
let shortText = fullText.substring(0, 50) + "...";
let lorem = document.getElementById('lorem');
let showMore = document.getElementById('showMore');

lorem.textContent = shortText;

function paragraph() {
    // let lorem = document.getElementById('lorem');
    // let fullText = 'Lorem, ipsum dolor sit amet consec etur adipi sicing elit. Laudantium amet, eaque dolores, mollitia aliquam aut alias cumque, commodi quisquam nemo quos minima voluptatem numquam ex illo nulla ea exercitationem!';
    // let shortText = fullText.substring(0, 50) + "...";
    // let showMore = document.getElementById('showMore');

    // lorem.textContent = shortText;

    if (lorem.textContent === shortText) {
        lorem.textContent = fullText;
        showMore.textContent = 'Show more';
    } else {
        lorem.textContent = shortText;
        showMore.textContent = 'Show less';
    }
}