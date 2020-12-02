//Open and close sidebar
document.getElementById("side_header__toggle");
sideBarToggle.addEventListener("click", closeSidebar);

function closeSidebar() {
  document.getElementById("side_header").style.width = "60px";
  document.getElementById("side_header__title").style.display = "none";
  document.getElementById("add_event_p").style.display = "none";
  document.getElementById("side_header__toggle").style.margin = "0 auto";
  document.getElementById("month_header").style.cssText = "left: 60px; width: calc(100% - 60px)";
  document.getElementById("main").style.cssText = "left: 60px; width: calc(100% - 60px)";
  document
    .getElementById("side_header__toggle")
    .addEventListener("click", openSidebar);

  function openSidebar() {
    document.getElementById("side_header").style.width = "20vw";
    document.getElementById("side_header__title").style.display = "block";
    document.getElementById("add_event_p").style.display = "block";
    document.getElementById("side_header__toggle").style.marginLeft = "5px";
    document.getElementById("month_header").style.cssText = "left:20vw; width: 80vw";
    document.getElementById("main").style.cssText = "left:20vw; width: 80vw";
    document
      .getElementById("side_header__toggle")
      .addEventListener("click", closeSidebar);
  }
}