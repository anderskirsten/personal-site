const modal = document.getElementById("storyModal");

//const storyBtn = document.getElementById("storyBtn");

const closeBtn = document.getElementById("closeBtn");

/*storyBtn.onclick = function(id) {
    console.log("storyBtn has been clicked.");
    modal.style.display = "block";
    console.log("Modal display is " + modal.style.display);
}*/

const modalOpen = function(id) {
    console.log("Story ID " + id + " has been selected.");
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    console.log("close button has been clicked")
    modal.style.display = "none";
}

/* Need to figure out how to prevent window.onclick happening when open modal button is clicked TBC...
window.onclick = function(event) {
    if (modal.style.display != "none") {
    console.log("window has been clicked");
    modal.style.display = "none";
    console.log("Modal display is " + modal.style.display);
    }
}
*/

//next step: build modal content structure and populate with skillStory data based on passed id **bugs to work on 1. get ss-headers to stick as page scrolls horizontally 2. enable out of modal click to close
