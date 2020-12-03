const currantMonth = document.querySelector("#month_header h2");
const currantDate = document.querySelector("#month_header p");
const monthDays = document.querySelector(".calendar_container__div-days");
const prevMonth = document.querySelector(".prev");
const nextMonth = document.querySelector(".next");

const date = new Date();
const today = new Date();

function setPrevMonth(date) {
    otherDate = new Date();
    if(date.getMonth() === 0){
        otherDate.setMonth(11);
        otherDate.setYear(date.getFullYear() - 1);
    }
    else {
        otherDate.setMonth(date.getMonth() - 1);
        otherDate.setYear(date.getFullYear());
    }
    return otherDate
}

function setNextMonth(date){
    otherDate = new Date();
    if(date.getMonth() === 11){
        otherDate.setMonth(0);
        otherDate.setYear(date.getFullYear() + 1);
    } else {
        otherDate.setMonth(date.getMonth() + 1);
        otherDate.setYear(date.getFullYear());
    }
    return otherDate
}

const renderCalendar = () => {
    date.setDate(1);
    
    const lastDayCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const firstDaysPrevMonth = 7 - lastDayIndex - 1;

    const weekDays = [
        'su',
        'mo',
        'tu',
        'we',
        'th',
        'fr',
        'sa'
    ];
    
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    
    currantMonth.innerHTML = months[date.getMonth()];
    currantDate.innerHTML = today.toDateString();
    
    let days = '';

    weekDays.forEach(function(weekDay) {
        days += `<div class="day-name"><p>${weekDay}</p></div>`;
    });
    
    for(let dayPrevMonth = firstDayIndex; dayPrevMonth > 0; dayPrevMonth--){
        if((`${setPrevMonth(date).getMonth()}` < 10)){
          days += `<div data-date="${setPrevMonth(date).getFullYear()}-0${setPrevMonth(date).getMonth()}-${lastDayPrevMonth - dayPrevMonth + 1}" tabindex="0" class="prev-date day-month"><button class="btn_day"><i class="fas fa-plus"></i>
            </button><p>${lastDayPrevMonth - dayPrevMonth + 1}</p></div>`;
        } else {
          days += `
          <div data-date="${setPrevMonth(date).getFullYear()}-${setPrevMonth(date).getMonth()}-${lastDayPrevMonth - dayPrevMonth + 1}" tabindex="0" class="prev-date day-month">
          <div class="day_unit_header">
                <div class="display_events"></div>
                <button class="btn_day"><i class="fas fa-plus"></i></button>
            </div>
          <p class="calendar_day">${lastDayPrevMonth - dayPrevMonth + 1}</p>
          </div>`;
        }
    }
    
    for(let day = 1; day <= lastDayCurrentMonth; day++) {
      if(day === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        if((day < 10) && (`${date.getMonth()}` < 10)){
          days += `
          <div data-date="${date.getFullYear()}-0${date.getMonth()}-0${day}" tabindex="0" class="today day-month" data>
          <div class="day_unit_header">
                    <div class="display_events"></div>
                    <button class="btn_day"><i class="fas fa-plus"></i></button>
                </div>
          </button>
          <p class="calendar_day">${day}</p>
          </div>`;
        } else {
          if((day < 10) && (`${date.getMonth()}` >= 10)){
            days += `
            <div data-date="${date.getFullYear()}-${date.getMonth()}-0${day}" tabindex="0" class="today day-month" data>
              <div class="day_unit_header">
                <div class="display_events"></div>
                <button class="btn_day"><i class="fas fa-plus"></i></button>
              </div>
            <p class="calendar_day">${day}</p>
            </div>`;
          } else {
            days += `
            <div data-date="${date.getFullYear()}-${date.getMonth()}-${day}" tabindex="0" class="today day-month" data>
              <div class="day_unit_header">
                <div class="display_events"></div>
                <button class="btn_day"><i class="fas fa-plus"></i></button>
              </div>
            <p class="calendar_day">${day}</p>
            </div>`;
          }
        }
      } else {
        if((day < 10) && (`${date.getMonth()}` < 10)){
          days += `
          <div data-date="${date.getFullYear()}-0${date.getMonth()}-0${day}" tabindex="0" class="day-month">
            <div class="day_unit_header">
              <div class="display_events"></div>
              <button class="btn_day"><i class="fas fa-plus"></i></button>
            </div>
          <p class="calendar_day">${day}</p>
          </div>`;
        } else {
          if((day < 10) && (`${date.getMonth()}` >= 10)){
            days += `
            <div data-date="${date.getFullYear()}-${date.getMonth()}-0${day}" tabindex="0" class="day-month">
              <div class="day_unit_header">
                <div class="display_events"></div>
                <button class="btn_day"><i class="fas fa-plus"></i></button>
              </div>
            <p class="calendar_day">${day}</p>
            </div>`;
          } else {
            days += `
            <div data-date="${date.getFullYear()}-${date.getMonth()}-${day}" tabindex="0" class="day-month">
              <div class="day_unit_header">
                <div class="display_events"></div>
                <button class="btn_day"><i class="fas fa-plus"></i></button>
              </div>
            <p class="calendar_day">${day}</p>
            </div>`;
          }
        }
      }
    }
    
    for(let dayNextMonth = 1; dayNextMonth <= firstDaysPrevMonth; dayNextMonth++){
      if((dayNextMonth < 10) && (`${setNextMonth(date).getMonth()}` < 10)){
        days +=`
        <div data-date="${setNextMonth(date).getFullYear()}-0${setNextMonth(date).getMonth()}-0${dayNextMonth}" tabindex="0" class="next-date day-month">
          <div class="day_unit_header">
              <div class="display_events"></div>
              <button class="btn_day"><i class="fas fa-plus"></i></button>
            </div>
            <p class="calendar_day">${dayNextMonth}</p>
            </div>`;
      } else {
        if((dayNextMonth < 10) && (`${setNextMonth(date).getMonth()}` >= 10)){
          days +=`
          <div data-date="${setNextMonth(date).getFullYear()}-${setNextMonth(date).getMonth()}-0${dayNextMonth}" tabindex="0" class="next-date day-month">
            <div class="day_unit_header">
              <div class="display_events"></div>
              <button class="btn_day"><i class="fas fa-plus"></i></button>
            </div>
            <p class="calendar_day">${dayNextMonth}</p>
            </div>`;
        } else {
          days +=`
          <div data-date="${setNextMonth(date).getFullYear()}-${setNextMonth(date).getMonth()}-0${dayNextMonth}" tabindex="0" class="next-date day-month">
            <div class="day_unit_header">
              <div class="display_events"></div>
              <button class="btn_day"><i class="fas fa-plus"></i></button>
            </div>
            <p class="calendar_day">${dayNextMonth}</p>
            </div>`;
        }
      }
      monthDays.innerHTML = days;
    }
};

prevMonth.addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextMonth.addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

const sideBarToggle = document.getElementById("side_header__toggle");
const sideHeader = document.getElementById("side_header");
const sideHeaderTitle = document.getElementById("side_header__title");
const addEventP = document.getElementById("add_event_p");
const monthHeader = document.getElementById("month_header");
const main = document.getElementById("main");
const calendarContainer = document.getElementById("calendarContainer");

sideBarToggle.addEventListener("click", function () {
  sideBarToggle.classList.toggle("side_header__toggle_closed");
  sideHeader.classList.toggle("side_header_closed");
  sideHeaderTitle.classList.toggle("side_header__title_closed");
  addEventP.classList.toggle("add_event_p_closed");
  monthHeader.classList.toggle("month_header_closed");
  main.classList.toggle("main_closed");
  calendarContainer.classList.toggle("calendar_container_closed");
});

const calendarContainerDiv = document.getElementById(
  "calendar_container__div-days"
);

calendarContainerDiv.addEventListener("mouseover", function (e) {

  if (e.target.className == "day-month") {
    e.target.children[0].children[1].classList.add("uncovered");
  } else if (e.target.className == "day_unit_header") {
    e.target.children[1].classList.add("uncovered");
  } else if (e.target.className == "today day-month") {
    e.target.children[0].children[1].classList.add("uncovered");
  }
  // else if (e.target.className == "calendar_day") {
  //   e.target.parentNode.children[0].children[1].classList.add("uncovered");
  // }
});

calendarContainerDiv.addEventListener("mouseout", function (e) {

  if (e.target.className == "day-month") {
    e.target.children[0].children[1].classList.remove("uncovered");
  } else if (e.target.className == "day_unit_header") {
    e.target.children[1].classList.remove("uncovered");
  } else if (e.target.className == "today day-month") {
    e.target.children[0].children[1].classList.remove("uncovered");
  }
  // else if (e.target.className == "calendar_day") {
  //   e.target.parentNode.children[0].children[1].classList.remove("uncovered");
  // }
});
