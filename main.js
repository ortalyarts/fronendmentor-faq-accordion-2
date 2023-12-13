var accordion = document.getElementsByClassName("accordion-item");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class*/
    this.querySelector('.accordion-title').classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.querySelector('.accordion-body');
    panel.classList.toggle("accordion-body-active");

  });
}