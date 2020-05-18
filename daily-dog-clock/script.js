const elements = {
    clock: document.querySelector('.clock'),
    messageEl: document.querySelector('.message'),
    partyBtn: document.querySelector('.party-btn'),
    imageEl: document.querySelector('.img-container>img'),
    partyImgEl: document.querySelector('.img-container div'),
    morningOptionEl: document.getElementById('morning'),
    noonOptionEl: document.getElementById('noon'),
    afternoonOptionEl: document.getElementById('afternoon'),

}
    let morningStart = elements.morningOptionEl.options[elements.morningOptionEl.selectedIndex].value;
    let noonStart = elements.noonOptionEl.options[elements.noonOptionEl.selectedIndex].value;
    let afternoonStart = elements.afternoonOptionEl.options[elements.afternoonOptionEl.selectedIndex].value;
    elements.morningOptionEl.addEventListener('change', cangeMorningTime);
    elements.noonOptionEl.addEventListener('change', changeNoonTime);
    elements.afternoonOptionEl.addEventListener('change', changeAfteroonTime);


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

const startAndEndTime = {
    morning: {
        start: morningStart,
        end: 12},
    noon: {
        start: noonStart,
        end: 14},
    afternoon: {
        start: afternoonStart,
        end: 17}
}

elements.partyBtn.addEventListener('click', startParty)
let messageText = '';
let isParty = false;
let hour = 0;
let timeOfDay = '';
let counter = 0

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
    console.log(startAndEndTime);
    if (ho>=startAndEndTime.morning.start && ho<=startAndEndTime.morning.end) {
        timeOfDay = 'morning';
    } else if(ho>=startAndEndTime.noon.start && ho<=startAndEndTime.noon.end){
        timeOfDay = 'noon';
    } else if(ho>=startAndEndTime.afternoon.start && ho<=startAndEndTime.afternoon.end) {
        timeOfDay = 'afternoon';
    }
    if (!isParty) {
        setImgAndTitle(timeOfDay);
    } 
    console.log(++counter)
    // console.log(startAndEndTime.morning.start)
    // console.log(startAndEndTime.afternoon.start)

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

    // console.log(dayTime)

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

function cangeMorningTime () {
    startAndEndTime.morning.start = elements.morningOptionEl.options[elements.morningOptionEl.selectedIndex].value;
    startAndEndTime.morning.end = +startAndEndTime.morning.start+ 2;
    // console.log(morningStart)
}
 function changeNoonTime() {
     startAndEndTime.noon.start = elements.noonOptionEl.options[elements.noonOptionEl.selectedIndex].value;
     startAndEndTime.noon.end = +startAndEndTime.noon.start + 2;
 }
 function changeAfteroonTime() {
    startAndEndTime.afternoon.start = elements.afternoonOptionEl.options[elements.noonOptionEl.selectedIndex].value;
    startAndEndTime.afternoon.end = +startAndEndTime.afternoon.start + 2;
}