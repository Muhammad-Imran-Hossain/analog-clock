
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

setInterval( () => {
    let time = new Date();
    let sec_now = time.getSeconds();
    let min_now = time.getMinutes();
    let hour_now = time.getHours(); 
    
    sec.style.transform = `rotate(${handsRotatet(60, sec_now)}deg)`;
    
    min.style.transform = `rotate(${handsRotatet(60, min_now)}deg)`;

    hour.style.transform = `rotate(${handsRotatet(12, hour_now) + 12}deg)`;

},1000);