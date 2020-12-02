const currantMonth = document.querySelector('#month_header h2');
const currantDate = document.querySelector('#month_header p');
const monthDays = document.querySelector('.calendar_container__div-days')
const prevMonth = document.querySelector('.prev');
const nextMonth = document.querySelector('.next');

const date = new Date();
const today = new Date();

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
        days += `<div tabindex="0" class="prev-date day-month"><button class="btn_day"><i class="fas fa-plus"></i>
            </button><p>${lastDayPrevMonth - dayPrevMonth + 1}</p></div>`;
    }
    
    for(let day = 1; day <= lastDayCurrentMonth; day++) {
        if(day === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div tabindex="0" class="today day-month"><button class="btn_day"><i class="fas fa-plus"></i>
            </button><p>${day}</p></div>`;
        } else {
            days += `<div tabindex="0" class="day-month"><button class="btn_day"><i class="fas fa-plus"></i>
            </button><p>${day}</p></div>`;
        }
    }
    
    for(let dayNextMonth = 1; dayNextMonth <= firstDaysPrevMonth; dayNextMonth++){
        days +=`<div tabindex="0" class="next-date day-month"><button class="btn_day"><i class="fas fa-plus"></i>
            </button><p>${dayNextMonth}</p></div>`;
        monthDays.innerHTML = days;
    }
}

prevMonth.addEventListener('click', function (){
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener('click', function (){
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

const sideBarToggle = document.getElementById('side_header__toggle');
const sideHeader = document.getElementById('side_header');
const sideHeaderTitle = document.getElementById('side_header__title');
const addEventP = document.getElementById('add_event_p');
const monthHeader = document.getElementById('month_header');
const main = document.getElementById('main');
const calendarContainer = document.getElementById('calendarContainer');

sideBarToggle.addEventListener('click', function () {
    sideBarToggle.classList.toggle('side_header__toggle_closed');
    sideHeader.classList.toggle('side_header_closed');
    sideHeaderTitle.classList.toggle('side_header__title_closed');
    addEventP.classList.toggle('add_event_p_closed');
    monthHeader.classList.toggle('month_header_closed');
    main.classList.toggle('main_closed');
    calendarContainer.classList.toggle('calendar_container_closed');
});

const calendarContainerDiv = document.getElementById('calendar_container__div-days');

calendarContainerDiv.addEventListener('mouseover', function (e) {

  if(e.target.children.length === 1){
    e.target.children[0].classList.add('uncovered');
  }
});

calendarContainerDiv.addEventListener('mouseout', function(e) {
  if(e.target.children.length === 1){
    e.target.children[0].classList.remove('uncovered');
  }
});
