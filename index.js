const dailySelector = document.querySelector(".daily-selector");
const weeklySelector = document.querySelector(".weekly-selector");
const monthlySelector = document.querySelector(".monthly-selector");

const workCurrentHours = document.querySelector(".work-current-hours");
const workPreviousHours = document.querySelector(".work-previous-hours");
const playCurrentHours = document.querySelector(".play-current-hours");
const playPreviousHours = document.querySelector(".play-previous-hours");
const studyCurrentHours = document.querySelector(".study-current-hours");
const studyPreviousHours = document.querySelector(".study-previous-hours");
const exerciseCurrentHours = document.querySelector(".exercise-current-hours");
const exercisePreviousHours = document.querySelector(".exercise-previous-hours");
const socialCurrentHours = document.querySelector(".social-current-hours");
const socialPreviousHours = document.querySelector(".social-previous-hours");
const selfCareCurrentHours = document.querySelector(".self-care-current-hours");
const selfCarePreviousHours = document.querySelector(".self-care-previous-hours");

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
  
const data = await getData("data.json");

console.log(data);
console.log(data[0].timeframes.weekly.current);

function selectTime(){
    dailySelector.addEventListener("click", ()=> {
        dailySelector.classList.add("selected")
        weeklySelector.classList.remove("selected");
        monthlySelector.classList.remove("selected");
        showHoursDaily();
    })

    weeklySelector.addEventListener("click", ()=> {
        weeklySelector.classList.add("selected")
        dailySelector.classList.remove("selected");
        monthlySelector.classList.remove("selected");
        showHoursWeekly();
    })

    monthlySelector.addEventListener("click", ()=> {
        monthlySelector.classList.add("selected")
        dailySelector.classList.remove("selected");
        weeklySelector.classList.remove("selected");
        showHoursMonthly();
    })
}

function showHoursDaily(){
    workCurrentHours.innerHTML = data[0].timeframes.daily.current;
    workPreviousHours.innerHTML = data[0].timeframes.daily.previous;

    playCurrentHours.innerHTML = data[1].timeframes.daily.current;
    playPreviousHours.innerHTML = data[1].timeframes.daily.previous;

    studyCurrentHours.innerHTML = data[2].timeframes.daily.current;
    studyPreviousHours.innerHTML = data[2].timeframes.daily.previous;

    exerciseCurrentHours.innerHTML = data[3].timeframes.daily.current;
    exercisePreviousHours.innerHTML = data[3].timeframes.daily.previous;

    socialCurrentHours.innerHTML = data[4].timeframes.daily.current;
    socialPreviousHours.innerHTML = data[4].timeframes.daily.previous;

    selfCareCurrentHours.innerHTML = data[5].timeframes.daily.current;
    selfCarePreviousHours.innerHTML = data[5].timeframes.daily.previous;
}

function showHoursWeekly(){
    workCurrentHours.innerHTML = data[0].timeframes.weekly.current;
    workPreviousHours.innerHTML = data[0].timeframes.weekly.previous;

    playCurrentHours.innerHTML = data[1].timeframes.weekly.current;
    playPreviousHours.innerHTML = data[1].timeframes.weekly.previous;

    studyCurrentHours.innerHTML = data[2].timeframes.weekly.current;
    studyPreviousHours.innerHTML = data[2].timeframes.weekly.previous;

    exerciseCurrentHours.innerHTML = data[3].timeframes.weekly.current;
    exercisePreviousHours.innerHTML = data[3].timeframes.weekly.previous;

    socialCurrentHours.innerHTML = data[4].timeframes.weekly.current;
    socialPreviousHours.innerHTML = data[4].timeframes.weekly.previous;
    
    selfCareCurrentHours.innerHTML = data[5].timeframes.weekly.current;
    selfCarePreviousHours.innerHTML = data[5].timeframes.weekly.previous;
}

function showHoursMonthly(){
    workCurrentHours.innerHTML = data[0].timeframes.monthly.current;
    workPreviousHours.innerHTML = data[0].timeframes.monthly.previous;

    playCurrentHours.innerHTML = data[1].timeframes.monthly.current;
    playPreviousHours.innerHTML = data[1].timeframes.monthly.previous;

    studyCurrentHours.innerHTML = data[2].timeframes.monthly.current;
    studyPreviousHours.innerHTML = data[2].timeframes.monthly.previous;

    exerciseCurrentHours.innerHTML = data[3].timeframes.monthly.current;
    exercisePreviousHours.innerHTML = data[3].timeframes.monthly.previous;

    socialCurrentHours.innerHTML = data[4].timeframes.monthly.current;
    socialPreviousHours.innerHTML = data[4].timeframes.monthly.previous;

    selfCareCurrentHours.innerHTML = data[5].timeframes.monthly.current;
    selfCarePreviousHours.innerHTML = data[5].timeframes.monthly.previous;
}

selectTime();
showHoursWeekly(); // default option