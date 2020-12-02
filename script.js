const currantMonth = document.querySelector('#month_header h2');
const currantDate = document.querySelector('#month_header p');
const monthDays = document.querySelector('.calendar_container__div-days')
const prevMonth = document.querySelector('.prev');
const nextMonth = document.querySelector('.next');

const date = new Date();

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
    currantDate.innerHTML = date.toDateString();
    
    let days = '';

    weekDays.forEach(function(weekDay) {
        days += `<div class="day-name">${weekDay}</div>`;
    });
    
    for(let dayPrevMonth = firstDayIndex; dayPrevMonth > 0; dayPrevMonth--){
        days += `<div tabindex="0" class="prev-date">${lastDayPrevMonth - dayPrevMonth + 1}<i class="fas fa-plus plus_symbol"></i></div>`;
    }
    
    for(let day = 1; day <= lastDayCurrentMonth; day++) {
        if(day === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div tabindex="0" class="today">${day}<i class="fas fa-plus plus_symbol"></i></div>`;
        } else {
            days += `<div tabindex="0">${day}<i class="fas fa-plus plus_symbol"></i></div>`;
        }
    }
    
    for(let dayNextMonth = 1; dayNextMonth <= firstDaysPrevMonth; dayNextMonth++){
        days +=`<div tabindex="0" class="next-date">${dayNextMonth}<i class="fas fa-plus plus_symbol"></i></div>`;
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
const plusSymbol = document.querySelectorAll('.plus_symbol');

calendarContainerDiv.addEventListener('click', function(e) {
    e.target.children[0].classList.add('uncovered');
});
