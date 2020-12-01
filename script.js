const currantMonth = document.querySelector('#month_header h2');
const currantDate = document.querySelector('#month_header p');
const monthDays = document.querySelector('.calendar_container__article-days')
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
        days += `<div class="prev-date">${lastDayPrevMonth - dayPrevMonth + 1}</div>`;
    }
    
    for(let day = 1; day <= lastDayCurrentMonth; day++) {
        if(day === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${day}</div>`;
        } else {
            days += `<div>${day}</div>`;
        }
    }
    
    for(let dayNextMonth = 1; dayNextMonth <= firstDaysPrevMonth; dayNextMonth++){
        days +=`<div class="next-date">${dayNextMonth}</div>`;
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

const toggle = document.getElementById('side_header__toggle');

toggle.addEventListener('click', function () {
    toggle.classList.toggle('closed');
})

const calendarContainer = document.getElementById("calendarContainer");

if(toggle.classList.contains('closed')) {
    calendarContainer.style.marginLeft = "8vw";
} else {
    calendarContainer.style.marginLeft = "0";
}