const { body } = document; // Or const body = document.body Or const body = document.etElementsByTagName('body');
//get body element

let zoomActivated = true;

window.addEventListener("keydown", (e) => {
  if (e.key === "z" || e.key === "Z") {
    zoomActivated = !zoomActivated;
  }
});

window.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e; // destrucring of clientX and clientY

  if (zoomActivated) {
    body.style.transform = `scale(2)`;
    body.style.transformOrigin = `${x}px ${y}px`; // Or body.style.transformOrigin = `${clientX}px ${clientY}px`;
  } else {
    body.style.transform = "none";
  }
});
