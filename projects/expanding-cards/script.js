const panels = document.querySelectorAll(".panel");

/* const removeActive = (activePanel) => {
  panels.forEach((panel) => {
    if (panel != activePanel) {
      panel.classList.forEach((classList) => {
        if (classList === "active") {
          panel.classList.remove("active");
        }
      });
    }
  });
}; */

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // console.log(panel);
    // removeActive(panel);
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
