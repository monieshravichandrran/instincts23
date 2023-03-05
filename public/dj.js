let iddj = 1;
const djid = document.getElementById("djid");
setInterval(() => {
    djid.src = "/images/proshows/dj/dj" + iddj + ".jpg";
    if (iddj == 5) {
        iddj = 1;
    }
    else
        iddj = iddj + 1;
}, 1200);