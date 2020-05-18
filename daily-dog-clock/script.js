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

const dayTime = {
    morning: false,
    noon: false,
    afternoon: false
}

elements.partyBtn.addEventListener('click', startParty)
let messageText = '';
let isParty = false;
let hour = 0;
let timeOfDay = '';

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
    if (ho>7 && ho<12) {
        timeOfDay = 'morning';
    } else if(ho>=12 && ho<14){
        timeOfDay = 'noon';
    } else if(ho>13 && ho<18) {
        timeOfDay = 'afternoon';
    }
    if (!isParty && dayTime[timeOfDay] === false) {
        setImgAndTitle(timeOfDay);
    }
    // if (isParty === false && (ho>7 && ho<12) && dayTime.morning === false) {
    //     setImgAndTitle('morning');
    // }
    // if (isParty === false && (ho>=12 && ho<14)) {
    //     setImgAndTitle('noon');
    // }
    // if (isParty === false && (ho>13 && ho<18) && dayTime.afternoon === false) {
    //     setImgAndTitle('afternoon');
    // }
}
setInterval(time, 1000);

function addZero(d) {
    return d < 10 ? `0${d}` : d;
}




function setImgAndTitle(h) {
    elements.imageEl.src = titlesAndImgs[h].img;
    elements.messageEl.textContent = titlesAndImgs[h].message;
    // dayTime[h] = true;
    timeOfDay = h;
    for (const t in dayTime) {
        if (t === h) {
            dayTime[t] = true;
        }
    }

    console.log(dayTime)

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