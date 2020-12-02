//Define an events array with a global scope
let eventsArray = [];

//Open the add event modal: event form functions are nested inside
var addEventBtn = document.getElementById("add_event_btn");
addEventBtn.addEventListener("click", openModal);

function openModal() {
  console.log("open modal");

  //Open the add event modal
  var addEventModal = document.getElementById("modal_display");
  addEventModal.innerHTML = `
        <div class="modal_container">
            <header class="modal_header">
                <i id="close_modal_btn" class="fas fa-times fa-2x"></i>
            </header>
            <div class="modal_body">
                <form id="new_event_form" name="new_event_form">
                  <div class="form_group">
                    <label for="add_event_title" class="form_label">
                      <p>Title</p>
                      <input type="text" id="add_event_title" class="form_field" maxlength="60"/>
                    </label>
                    <span id="titleIcon" aria-hidden="true"></span>
                    <span id="titleInputStatus" class="errorMessage"></span>
                  </div>
                  <div class="form_group">
                    <label class="form_label">Initial date
                      <div class="date_time_input">
                        <input type="date" id="add_initial_date" class="form_field date_input"/>
                        <input type="time" id="add_initial_time" class="form_field time_input"/>
                      </div>
                    </label>
                    <span id="initialDateIcon" aria-hidden="true"></span>
                    <span id="initialDateStatus" class="errorMessage"></span>
                  </div>
                    <div class="form_group" id="end_date_group">
                        <label for="add_end_date" class="checkbox_label">
                            <input type="checkbox" id="add_end_date" class="form_checkbox" />
                            <p>Add end date</p>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form_group" id="reminder_group">
                        <label for="add_reminder" class="checkbox_label">
                            <input type="checkbox" id="add_reminder" class="form_checkbox" />
                            <p>Add reminder</p>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <label for="add_event_description" class="form_label">Description
                        <textarea rows="4" maxlength="500" id="add_event_description" class="form_field form_textarea"></textarea>
                    </label>
                    <label for="add_event_type" class="form_label">Type of event
                        <select class="form_field" id="add_event_type">
                        <option value="Meeting">Meeting</option>
                        <option value="Personal">Personal</option>
                        <option value="Study">Study</option>
                        </select>
                    </label>
                    <div class="form_btn_container">
                      <button id="add_event_submit" class="event_form_btn">Save</button>
                      <button id="cancel_event" class="event_form_btn">Cancel</button>
                    </div>
                </form>
            </div>
            <div id="modal_background">
            </div>
      </div>`;

  //-------------------Close the add event modal--------------------------//
  var closeModalBtn = document.getElementById("close_modal_btn");
  closeModalBtn.addEventListener("click", closeModal);

  document
    .getElementById("modal_background")
    .addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    console.log("close modal");
    var addEventModal = document.getElementById("modal_display");
    addEventModal.innerHTML = "";
  }
  //--------------------End of close the add event modal------------------------//

  //------------Define a new event object-------------------//
  var newEvent = {
    title: "",
    initialDate: "",
    initialTime: "",
    endDate: "",
    endTime: "",
    reminder: "",
    description: "",
    eventType: "",
  };
  //---------------------------------------------------------//

  //-----------------------On blur validation-------------------------//
  //Define on blur listeners
  document
    .getElementById("add_event_title")
    .addEventListener("blur", titleValidate);

  document
    .getElementById("add_initial_date")
    .addEventListener("blur", initialDateValidate);
    document
    .getElementById("add_initial_time")
    .addEventListener("blur", initialTimeValidate);

  //Function for validating title
  function titleValidate() {
    var titleInput = document.getElementById("add_event_title");

    if (titleInput.value == "") {
      document.getElementById("titleInputStatus").innerHTML =
        "Please enter a title for the event";
      document.getElementById("titleInputStatus").style.display = "block";
      return false;
    } else if (titleInput.value > 60) {
      document.getElementById("titleInputStatus").innerHTML =
        "Max lenght 60 characters";
      document.getElementById("titleInputStatus").style.display = "block";
      return false;
    } else {
      document.getElementById("titleInputStatus").style.display = "none";
      newEvent.title = document.getElementById("add_event_title").value;
      return true;
    }
  }
  //-------------------------------------------------------------

  //Function for validating initial date
  function initialDateValidate() {
    var initialDateInput = document.getElementById("add_initial_date");

    if (initialDateInput.value == "") {
      document.getElementById("initialDateStatus").innerHTML =
        "Please enter the initial date for the event";
      document.getElementById("initialDateStatus").style.display = "block";
      return false; 
    } else {
      document.getElementById("initialDateStatus").style.display = "none";
      newEvent.initialDate = document.getElementById("add_initial_date").value;
      return true;
    }
  }
  //----------------------------------------------------------

  function initialTimeValidate(){
    var initialTimeInput = document.getElementById("add_initial_time");
    if (initialTimeInput.value == "") {
      document.getElementById("initialDateStatus").innerHTML =
        "Please enter the initial time for the event";
      document.getElementById("initialDateStatus").style.display = "block";
      return false;
    } else {
      document.getElementById("initialDateStatus").style.display = "none";
      newEvent.initialTime = document.getElementById("add_initial_time").value;
      return true;
    }
  }
  //-----------------------End of on blur validation---------------------------//

  //---------Create event and save it as an object in an array------------------//
  document
    .getElementById("add_event_submit")
    .addEventListener("click", setEvent);

  function setEvent(e) {
    e.preventDefault();
    console.log("set event function");

    //---------------On submit validation check-------------------//
    //If ok, it adds info to the newEvent object
    function checkform() {
      if (!titleValidate() || !initialDateValidate()) {
        valid = false;
      } else {
        var startDate = document.getElementById("add_initial_date").value;
        var startTime = document.getElementById("add_initial_time").value;

        newEvent.initialDate = startDate;
        newEvent.initialTime = startTime;
        newEvent.endDate = setEndDate();
        newEvent.endTime = setEndTime();
        newEvent.reminder = setReminder();
        newEvent.description = document.getElementById(
          "add_event_description"
        ).value;
        newEvent.eventType = document.getElementById("add_event_type").value;

        eventsArray.push(newEvent);

        localStorage.setItem("eventsList", JSON.stringify(eventsArray));

        closeModal();
      }
    }
    //-------------End of on submit validation check-------------//

    checkform();
    console.log(newEvent);
    console.log(eventsArray);
  }
  //--------------End of the set event function----------------//
  //----------------Set end date-----------------------//
  var addEndDate = document.getElementById("add_end_date");
  addEndDate.addEventListener("click", setEndDate);

  function setEndDate() {
    var endDateGroup = document.getElementById("end_date_group");
    if (addEndDate.checked) {
      endDateGroup.insertAdjacentHTML(
        "beforeend",
        `
          <label class="form_label">
            <div class="date_time_input">
              <input type="date" id="end_date" class="form_field date_input"/>
              <input type="time" id="end_time" class="form_field time_input"/>
            </div>
          </label>`
      );
      return newEvent.endDate = document.getElementById("end_date").value;
      
    } else {
      endDateGroup.children[endDateGroup.childElementCount - 1].remove();
      return (newEvent.endDate = null);
    }
  }

  function setEndTime() {
    return newEvent.endTime = document.getElementById("end_time").value;
  }
  //----------------End of set end date-----------------//

  //-------------------Set reminder---------------------//
  var addReminder = document.getElementById("add_reminder");
  addReminder.addEventListener("click", setReminder);

  function setReminder() {
    var reminderGroup = document.getElementById("reminder_group");
    if (addReminder.checked) {
      reminderGroup.insertAdjacentHTML(
        "beforeend",
        `<label class="form_label">
      <select class="form_field" id="reminder">
          <option value="5">5 minutes before</option>
          <option value="10">10 minutes before</option>
          <option value="15">15 minutes before</option>
          <option value="30">30 minutes before</option>
          <option value="60">1 hour before</option>
  </select>
  </label>
  `
      );
      return (newEvent.reminder = document.getElementById("reminder").value);
    } else {
      reminderGroup.children[reminderGroup.childElementCount - 1].remove();
      return (newEvent.reminder = null);
    }
  }
  //-------------End of set reminder--------------------//
}
