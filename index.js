const time = document.getElementById('time');

setInterval(() => {
    const clock = new Date();
    const d = clock.toDateString();
    const t = clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds();

    time.innerHTML = t + "<br>on " + d;
},1000);