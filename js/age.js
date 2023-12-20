let ageEl = document.getElementById("age");

setInterval(() => {
    let time = (new Date() - new Date(2004, 1, 21)) / (1000 * 60 * 60 * 24 * 365.25);
    ageEl.innerText = time.toString().substring(0, 12);
}, 50);