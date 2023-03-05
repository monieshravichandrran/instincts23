let idpro = 1;
const proid = document.getElementById("proid");
setInterval(() => {
    proid.src = "/images/proshows/pro/pro" + idpro + ".jpg";
    if (idpro == 7) {
        idpro = 1;
    }
    else
        idpro = idpro + 1;
}, 1200);