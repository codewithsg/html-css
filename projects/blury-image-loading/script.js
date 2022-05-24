const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let loading = 0;

let interval = setInterval(blurring, 20);

function blurring() {
  loading++;
  if (loading > 99) {
    clearInterval(interval);
  }
  loadingText.innerHTML = loading + "%";
  loadingText.style.opacity = (100 - loading) / 100;
  background.style.filter = `blur(${100 - loading}px)`;
  console.log(loading);
}
