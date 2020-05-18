const clock = document.querySelector('.clock');
const messageEl = document.querySelector('.message');
const partyBtn = document.querySelector('.party-btn');
partyBtn.addEventListener('click', startParty)
const imageEl = document.querySelector('.img-container>img');
const partyImgEl = document.querySelector('.img-container div')
console.log(partyImgEl)
let messageText = '';
let isParty = false;
let hour = 0;

function time() {
    let date = new Date();
    let ho = date.getHours();
    hour = ho;
    let ampm = ho >= 12 ? 'pm' : 'am';
    h = ho > 12 ? ho % 12 : ho;
    h = addZero(h);
    let min = date.getMinutes();
    let m = addZero(min);
    let sec = date.getSeconds();
    let s = addZero(sec);
    clock.textContent = `${h}:${m}:${s} ${ampm}.`;
    // console.log(`${h}:${m}:${s} ${ampm}`);
    if (isParty === false && (h>7 && h<12)) {
        setImgAndTitle('morning');
    }
    if (isParty === false && (h>=12 && h<15)) {
        setImgAndTitle('noon');
    }
    if (isParty === false && (h>13 && h<18)) {
        setImgAndTitle('coding');
    }
}

setInterval(time, 1000);

function addZero(d) {
    return d < 10 ? `0${d}` : d;
}

const titlesAndImgs = {
    morning: {
        message:"It's time to get up!!!",
        img: './img/morning.jpg'},
    noon:  {
        message:"Let's go to have a lunch!",
        img: './img/lunch.jpg'},
    afternoon: {
        message: 'Now you must coding!',
        img: './img/coding.jpg'}
    
}


function setImgAndTitle(h) {
    imageEl.src = titlesAndImgs[h].img;
    messageEl.textContent = titlesAndImgs[h].message;
}

function startParty() {
    if (!isParty) {
        messageText = messageEl.textContent;
        partyImgEl.setAttribute('class', 'show');
        partyBtn.textContent = 'Stop the party!';
        isParty = true;

        messageEl.textContent = 'Party';
    } else {
        messageEl.textContent = messageText;
        console.log(messageEl.textContent);
        
        partyImgEl.setAttribute('class', 'hidden');
        partyBtn.textContent = "It's time to party!";
        isParty = false;

    }
}