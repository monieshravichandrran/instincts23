let e = 0;

setInterval(() => {
    const celeb = document.getElementById("celeb");
    if (celeb) {
        if (e == 0) {
            celeb.src = "/images/proshows/jagan.jpg"
            e = 1;
        }
        else {
            celeb.src = "/images/proshows/ramkumar.jpg"
            e = 0;
        }
    }
}, 2000)