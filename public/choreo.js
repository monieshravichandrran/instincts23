let idchor = 1;
const chorid = document.getElementById("chorid");
setInterval(() => {
    chorid.src = "/images/proshows/choreo/chor" + idchor + ".jpg";
    if (idchor == 7) {
        idchor = 1;
    }
    else
        idchor = idchor + 1;
}, 1200);