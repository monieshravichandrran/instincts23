let idceleb = 2;
const chorid = document.getElementById("celebrityid");
setInterval(() => {
    chorid.src = "/images/proshows/celebrity/celeb" + idceleb + ".jpg";
    if (idceleb == 6) {
        idceleb = 1;
    }
    else
        idceleb = idceleb + 1;
}, 1200);