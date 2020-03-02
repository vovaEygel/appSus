function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 8) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makeLorem(length) {

    var randStr = '';
    while (randStr.length < length) {
        var wordLength = getRandomInt(3, 6);
        var word = _createWord(wordLength);

        if (Math.random() > 0.9) word += ',';

        randStr += word + ' ';
    }
    randStr = randStr.substring(0, length);
    randStr = randStr[0].toUpperCase() + randStr.substr(1)

    return randStr;
}

export const utilService = {
    getRandomInt,
    makeLorem,
    makeId
}


function _getRandChar() {
    var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    var randIndex = parseInt(Math.random() * LETTERS.length)
    return LETTERS.charAt(randIndex);
}

function _createWord(length) {
    var word = '';
    while (word.length < length) {
        var randChar = _getRandChar();
        word += randChar;
    }
    return word;
}

function convertTimestamp(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getSeconds();
    let AMPM;
    if (hours > 12) AMPM = 'PM'
    if (hours <= 12) AMPM = 'AM'

    let timeString = hours.toString().padStart(2, '0') +
        ':' + minutes.toString().padStart(2, '0') +
        ':' + seconds.toString().padStart(2, '0') +
        ' ' + AMPM
    return timeString
}

function sortByTxt(a, b) {
    const txtA = a.txt.toUpperCase();
    const txtB = b.txt.toUpperCase();
    let comparison = 0;
    if (txtA > txtB) comparison = 1;
    else if (txtA < txtB) comparison = -1;
    return comparison;
}

export const utilsService = {
    getRandomInt,
    makeLorem,
    makeId,
    convertTimestamp,
    sortByTxt
}