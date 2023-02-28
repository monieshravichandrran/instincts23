let prev = Math.floor(Math.random()*13)+1;
function updateTimer() {
    future  = Date.parse("March 9, 2023 8:00:00");
    now     = new Date();
    diff    = future - now;
    const box = Math.floor(Math.random()*13)+1;
    //console.log(ocument.getElementById("pin-"+prev));
    document.getElementById("pin-"+prev).classList.remove("zoomeff");
    prev = box;
    // console.log(ocument.getElementById("pin-"+prev));
    document.getElementById("pin-"+box).classList.add("zoomeff");
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        `<div class = "lg:h-28 lg:w-40 p-2 lg:p-4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"><p>${d}</p><p class="text-xs lg:text-sm lg:mx-2">days</p></div>
        <div class = "lg:h-28 lg:w-40 p-2 lg:p-4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"><p>${h}</p><p class="text-xs lg:text-sm lg:mx-2">hrs</p></div>
        <div class = "lg:h-28 lg:w-40 p-2 lg:p-4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"><p>${m}</p><p class="text-xs lg:text-sm lg:mx-2">mins</p></div>
        <div class = "lg:h-28 lg:w-40 p-2 lg:p-4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"><p>${s}</p><p class="text-xs lg:text-sm lg:mx-2">secs</p></div>
        `
  }
  setInterval('updateTimer()', 1000 );
  