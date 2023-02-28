let time = document.getElementById("container");
let activeClass = "item--active";
let timelineElements = document.getElementsByClassName("item");
let itemLength = timelineElements.length;
if (timelineElements[0]) {
  timelineElements[0].classList.add(activeClass);
}

console.log(time);
window.onscroll = () => {
  let min,
    max,
    pos = time.scrollTop;
  let idx = 0;
  timelineElements = document.getElementsByClassName("item");
  for (let i of timelineElements) {
    let offset = i.getBoundingClientRect();
    min = offset.top;
    max = offset.height + offset.top;
    if (idx === itemLength - 1 && pos > min + time.style.height / 2) {
      for (let i of timelineElements) {
        i.classList.remove(activeClass);
      }
      // console.log(timelineElements);
      time.style.backgroundImage =
        "url(" + timelineElements[itemLength - 1].src + ")";
      timelineElements[itemLength - 1].classList.add(activeClass);
    } else if (pos <= max - 130 && pos >= min - 300) {
      time.style.backgroundImage = "url(";
      for (let j of timelineElements) {
        j.classList.remove(activeClass);
      }
      i.classList.add(activeClass);
    }
    idx++;
  }
};
