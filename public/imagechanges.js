let d = 0;

setInterval(() => {
    const pro = document.getElementById("pro");
    if (pro) {
        if (d == 0) {
            pro.src = "/images/proshows/pro1.jpg"
            d += 1;
        }
        else if(d==1) {
            pro.src = "/images/proshows/pro0.jpg"
            d += 1;
        }
        else if(d==2){
            pro.src = "/images/proshows/pro/pro3.jpg"
            d = 0;
        }
    }
}, 2000)