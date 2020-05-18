const elements = {
    clock: document.querySelector('.clock'),
    messageEl: document.querySelector('.message'),
    partyBtn: document.querySelector('.party-btn'),
    imageEl: document.querySelector('.img-container>img'),
    partyImgEl: document.querySelector('.img-container div')
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

elements.partyBtn.addEventListener('click', startParty)
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
    elements.clock.textContent = `${h}:${m}:${s} ${ampm}.`;
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




function setImgAndTitle(h) {
    elements.imageEl.src = titlesAndImgs[h].img;
    elements.messageEl.textContent = titlesAndImgs[h].message;
}

function startParty() {
    if (!isParty) {
        messageText = elements.messageEl.textContent;
        elements.partyImgEl.setAttribute('class', 'show');
        elements.partyBtn.textContent = 'Stop the party!';
        isParty = true;

        elements.messageEl.textContent = 'Party';
    } else {
        elements.messageEl.textContent = messageText;
        
        elements.partyImgEl.setAttribute('class', 'hidden');
        elements.partyBtn.textContent = "It's time to party!";
        isParty = false;

    }
}