let premiumCo = document.getElementById('premium-invest');
let musicEvent = document.getElementById('music-event');
let fyloPage = document.getElementById('fylo-page');

// Premui Invest 

premiumCo.addEventListener('click', ()=> {
    let premiumMsg = "Premium invest is a crypto investment website i developed out of my love for crypto currency. i developed this website using HTML5 & CSS3, next i will implement javascript in my next work on this site"
    alert(`Premium Invest\n \n ${premiumMsg}`)
})

// Music Event

musicEvent.addEventListener('click', ()=> {
    let musicMsg = "Music event is a website for exploring live music & concerts online";
    alert(`music Event\n \n ${musicMsg}`)
})

// Fylo Page

fyloPage.addEventListener('click', ()=> {
    let fyloMsg = "Fylo Page is a website i developed from Front-end mentor coding challenge";
    alert(`Fylo Page\n \n ${fyloMsg}`);
})