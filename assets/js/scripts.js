//Horizontal Scroll and Dragging
const track = document.querySelector("#container");
let mouseDown = false;
let startX, scrollLeft;

const startScrooling = (event) =>{
  track.scrollBy({
    left: event.deltaY < 0 ? -70 : 70,
  });

  //Call Tracker
  horizontalScroll(track.scrollLeft);
}
const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;

  //Call Tracker
  horizontalScroll(scrollLeft);
};
const stopDragging = (event) => {
  mouseDown = false;
};

track.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - track.offsetLeft;
  const scroll = x - startX;
  track.scrollLeft = scrollLeft - scroll;

  //Call Tracker
  horizontalScroll(track.scrollLeft);
});

// Add the event listeners
track.addEventListener("mousedown", startDragging, false);
track.addEventListener("mouseup", stopDragging, false);
track.addEventListener("mouseleave", stopDragging, false);
track.addEventListener("wheel", startScrooling, false);

//Horizontal scroll tracking
const horizontalScroll = (scrollLeft) => {
  let percentage;
  const height = document.documentElement.scrollHeight;

  if(screen.width > 1600)
    percentage = 66;
  else
    percentage = 46;

  const scrolled = (scrollLeft / height) * percentage;
  document.getElementById("myBar").style.transform =
    "translate3d( " + scrolled + "px, 0px, 0px)";
};

// Targeting video element
const videos = document.querySelectorAll(".media");
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("mouseover", function (e) {
    //Add onHover All Video Dark Effect
    videos.forEach((i) => {
      i.classList.add("filter");
    });

    //Avoid the Promise Error
    setTimeout(function () {
      //Play video onHover Thumb
      videos[i].play();
    }, 150);

    //Remove onHover Video Dark Effect
    videos[i].classList.remove("filter");
  });

  videos[i].addEventListener("mouseout", function (e) {
    //Remove onHover All Video Dark Effect
    videos.forEach((i) => {
      i.classList.remove("filter");
    });

    //Reload Video
    try {
      videos[i].load();
    } catch (ex) {
      console.log("");
    }
  });
}

//Trigger side Menu
const sideMenu = (value) => {
    if(value)
        document.querySelectorAll(".nav__list")[0].classList.add("active");
    else
        document.querySelectorAll(".nav__list")[0].classList.remove("active");
};