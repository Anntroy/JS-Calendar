const currantMonth = document.querySelector('#month_header h2');
const currantDate = document.querySelector('#month_header p');

const date = new Date();
date.setDate(1);

const monthDays = document.querySelector('.calendar_container__article-days')

const lastDayCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();
const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
console.log(lastDayIndex)


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

for(let dayPrevMonth = firstDayIndex; dayPrevMonth > 0; dayPrevMonth--){
    days += `<div class="prev-date">${lastDayPrevMonth - dayPrevMonth + 1}</div>`;
}

for(let day = 1; day <= lastDayCurrentMonth; day++) {
    days += `<div>${day}</div>`;
    monthDays.innerHTML = days;
}
