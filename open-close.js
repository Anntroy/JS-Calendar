//Open and close sidebar
var sideBarToggle = document.getElementById("side_header__toggle");
sideBarToggle.addEventListener("click", closeSidebar);

function closeSidebar() {
  document.getElementById("side_header").style.width = "7vw";
  document.getElementById("side_header__title").style.display = "none";
  document.getElementById("add_event_p").style.display = "none";
  document.getElementById("side_header__toggle").style.margin = "0 auto";
  document.getElementById("month_header").style.left = "60px";
  document.getElementById("month_header").style.width = "calc(100% - 60px)";
  document.getElementById("main").style.left = "60px";
  document.getElementById("main").style.width = "calc(100% - 60px)";
  document
    .getElementById("side_header__toggle")
    .addEventListener("click", openSidebar);

  function openSidebar() {
    document.getElementById("side_header").style.width = "20vw";
    document.getElementById("side_header__title").style.display = "block";
    document.getElementById("add_event_p").style.display = "block";
    document.getElementById("side_header__toggle").style.marginLeft = "5px";
    document.getElementById("month_header").style.left = "20vw";
    document.getElementById("month_header").style.width = "80vw";
    document.getElementById("main").style.left = "20vw";
    document.getElementById("main").style.width = "80vw";
    document
      .getElementById("side_header__toggle")
      .addEventListener("click", closeSidebar);
  }
}

//CREATE AN EVENT

//Define an events array

let eventsArray = [];
let newEvent = localStorage.getItem("");

//Open the add event modal + event form functions
var addEventBtn = document.getElementById("add_event_btn");
addEventBtn.addEventListener("click", openModal);

function openModal() {
  var addEventModal = document.getElementById("add_event_modal");
  addEventModal.innerHTML = `
    <div id="modal_display">
        <div id="modal_container">
            <header id="modal_header">
                <i id="close_modal_btn" class="fas fa-times"></i>
            </header>
            <div id="modal_body">
                <form id="new_event_form" name="new_event_form">
                    <label class="form_label">Title
                        <input type="text" id="add_event_title" class="form_field" maxlength="60"/>
                    </label>
                    <label class="form_label">Initial date
                        <input type="date" id="add_initial_date" class="form_field"/>
                    </label>
                    <div class="form_group" id="end_date_group">
                        <label class="checkbox_label">
                            <input type="checkbox" id="add_end_date" class="form_checkbox" />
                            <p>Add end date</p>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form_group" id="reminder_group">
                        <label class="checkbox_label">
                            <input type="checkbox" id="add_reminder" class="form_checkbox" />
                            <p>Add reminder</p>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <label class="form_label">Description
                        <textarea rows="4" maxlength="500" id="add_event_description"></textarea>
                    </label>
                    <label class="form_label">Type of event
                        <select class="form_field" id="add_event_type">
                        <option value="Meeting">Meeting</option>
                        <option value="Personal">Personal</option>
                        <option value="Study">Study</option>
                        </select>
                    </label>
                    <div class="form_btn_container">
                    <input type="submit" value="Save" id="add_event_submit" class="event_form_btn"/>
                    <button id="cancel_event" class="event_form_btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>`;

  //Close the add event modal
  var closeModalBtn = document.getElementById("close_modal_btn");
  closeModalBtn.addEventListener("click", closeModal);

  function closeModal() {
    var addEventModal = document.getElementById("add_event_modal");
    addEventModal.innerHTML = "";
  }

  //Create event and save it as an object
  var createEvent = document.getElementById("add_event_submit");
  createEvent.addEventListener("click", setEvent);


 

  function setEvent(e) {

    // e.preventDefault();

    //Define a event object
    newEvent = {
      title: document.getElementById("add_event_title").value,
      initialDate: document.getElementById("add_initial_date").value,
      endDate: setEndDate(),
      reminder: setReminder(),
      description: document.getElementById("add_event_description").value,
      type: document.getElementById("add_event_type").value,
    };

    eventsArray.push(newEvent);
    
    //Add end date
    newEvent.endDate;
    //Add reminder
    newEvent.reminder;

    // newEvent.endDate;
    // newEvent.reminder;

    //Add title
    // newEvent.title = document.getElementById("add_event_title").value;

    // //Add initial date
    // newEvent.initialDate = document.getElementById("add_initial_date").value;

    // //Add description
    // newEvent.description = document.getElementById(
    //   "add_event_description"
    // ).value;

    //Add type
    // newEvent.type = document.getElementById("add_event_type").value;

    


    //On blur validation
    //   document.new_event_form.add_event_title.onblur = titleValidate;
    //   document.new_event_form.add_initial_date.onblur = initialDateValidate;
    //   document.new_event_form.add_end_date.onblur = endDateValidate;
    //   document.new_event_form.add_reminder.onblur = reminderValidate;


  }

//Set end date
var addEndDate = document.getElementById("add_end_date");
addEndDate.addEventListener("click", setEndDate);

function setEndDate() {
  var endDateGroup = document.getElementById("end_date_group");
  if (addEndDate.checked) {
    endDateGroup.insertAdjacentHTML(
      "beforeend",
      `<label class="form_label"><input type="date" id="end_date" class="form_field"/></label>`
    );
    newEvent.endDate = document.getElementById("end_date").value;
  } else {
    endDateGroup.children[endDateGroup.childElementCount - 1].remove();
    newEvent.endDate = null;
  }
}

//Set reminder
var addReminder = document.getElementById("add_reminder");
addReminder.addEventListener("click", setReminder);

function setReminder() {
  var reminderGroup = document.getElementById("reminder_group");
  if (addReminder.checked) {
    reminderGroup.insertAdjacentHTML(
      "beforeend",
      `<label class="form_label">
        <select class="form_label" id="reminder">
            <option value="5">5 minutes before</option>
            <option value="10">10 minutes before</option>
            <option value="15">15 minutes before</option>
            <option value="30">30 minutes before</option>
            <option value="60">1 hour before</option>
    </select>
    </label>
    `
    );
    newEvent.reminder = document.getElementById("reminder").value;
  } else {
    reminderGroup.children[reminderGroup.childElementCount - 1].remove();
    newEvent.reminder = null;
  }
}

}
