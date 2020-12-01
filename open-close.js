var sideBarToggle = document.getElementById("side_header__toggle");
sideBarToggle.addEventListener("click", closeSidebar);

function closeSidebar() {
  document.getElementById("side_header").style.width = "6vw";
  document.getElementById("side_header__title").style.display = "none";
  document.getElementById("add_event_p").style.display = "none";
  document.getElementById("side_header__toggle").style.margin = "0 auto";
  document.getElementById("month_header").style.left = "0";
  document.getElementById("main").style.left = "0";
  document
    .getElementById("side_header__toggle")
    .addEventListener("click", openSidebar);

  function openSidebar() {
    document.getElementById("side_header").style.width = "20vw";
    document.getElementById("side_header__title").style.display = "block";
    document.getElementById("add_event_p").style.display = "block";
    document.getElementById("side_header__toggle").style.margin = "0";
    document.getElementById("month_header").style.left = "10vw";
    document.getElementById("main").style.left = "10vw";
    document
      .getElementById("side_header__toggle")
      .addEventListener("click", closeSidebar);
  }
}

var addEventBtn = document.getElementById("add_event_btn");
addEventBtn.addEventListener("click", openModal);

function openModal() {
  var addEventModal = document.getElementById("add_event_modal");
  addEventModal.innerHTML = `<div id="modal_display">
<div id="modal_container">
    <header id="modal_header">
        <i id="close_modal_btn" class="fas fa-times"></i>
    </header>
    <div id="modal_body">
        <form>
            <label class="form_label">Title
                <input type="text" id="title" class="form_field" />
            </label>
            <label class="form_label">Initial date
                <input type="date" id="initial_date" class="form_field" />
            </label>
            <label class="checkbox_label">
                <input type="checkbox" id="end_date" class="form_checkbox" />End date
            </label>
            <label class="checkbox_label">
                <input type="checkbox" id="reminder" class="form_checkbox" />Reminder
            </label>
            <label class="form_label">Description
                <textarea rows="4" maxlength="500"></textarea>
            </label>
            <input type="submit" value="add event" id="add_event_submit"/>
        </form>
    </div>
</div>
</div>`;

  var closeModalBtn = document.getElementById("close_modal_btn");
  closeModalBtn.addEventListener("click", closeModal);

  function closeModal() {
    var addEventModal = document.getElementById("add_event_modal");
    addEventModal.innerHTML = "";
  }
}
