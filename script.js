function lowerCase() {
    let lowerInput = document.getElementById('lowerInput');
    lowerInput.value = lowerInput.value.toLocaleLowerCase('tr');
}

function upperCase() {
    let upperInput = document.getElementById('upperInput');
    upperInput.value = upperInput.value.toLocaleUpperCase('tr');
}

function paragraph() {
    let lorem = document.getElementById('lorem');
    let fulltext = 'Lorem, ipsum dolor sit amet consec etur adipi sicing elit. Laudantium amet, eaque dolores, mollitia aliquam aut alias cumque, commodi quisquam nemo quos minima voluptatem numquam ex illo nulla ea exercitationem!';
    let shortText = fulltext.slice(0, 50) + "...";
    let showMore = document.getElementById('showMore');
    let showLess = document.getElementById('showLess');

    if (lorem.textContent === fulltext) {
        lorem.textContent = shortText;
        showLess.style.display = 'none';
        showMore.style.display = 'block';
    } else {
        lorem.textContent = fulltext;
        showLess.style.display = 'block';
        showMore.style.display = 'none';
    }
}