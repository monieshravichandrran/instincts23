let idbike = 2;
const bikeid = document.getElementById("bikeid");
setInterval(() => {
    bikeid.src = "/images/proshows/bike/bike" + idbike + ".jpg";
    if (idbike == 6) {
        idbike = 1;
    }
    else
        idbike = idbike + 1;
}, 1200);