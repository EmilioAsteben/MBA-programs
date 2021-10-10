//Accordion for subjects list (mobile version)

export function subjectsList() {
  let copyOpen = "subjects_list--open";
  let titles = document.querySelectorAll(".program_module_title");
  
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener(
      "click",
      function (e) {
        toggleItem(e, i);
      },
      false
    );
  }
  function toggleItem(e, id) {
    if (window.screen.width > 375) return;

    let openCopy = document.querySelector("." + copyOpen + "_" + id);
    let sameElem = false;
    if (openCopy) {
      closeItem(openCopy, id, e);
      sameElem = openCopy.previousElementSibling === e.currentTarget;
    }
    if (!sameElem) {
      let panel = e.currentTarget.nextElementSibling;
      openItem(panel, id, e);
    }
  }
  function closeItem(openCopy, id, e) {
    e.currentTarget.classList.remove("open");
    openCopy.classList.remove(copyOpen + "_" + id);
    openCopy.style.maxHeight = 0;
   
  }

  function openItem(panel, id, e) {
    e && e.currentTarget.classList.add("open");
    id
      ? panel.classList.add(copyOpen + "_" + id)
      : panel.classList.add(copyOpen + "_" + "0");
    panel.style.maxHeight = panel.scrollHeight + "px";
  
  }

  let defaultPanel = document.querySelector(".subjects_list");
  let sectionHeading = document.querySelector(".program_module_title");

  if (defaultPanel) {
    defaultPanel.classList.remove(copyOpen);
    setTimeout(function () {
      openItem(defaultPanel);
      sectionHeading.classList.add("open");
    }, 50);
  }
}
