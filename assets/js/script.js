let currentDisplayMonth = 9

function fillCalendar(month){
    let date = new Date(2021, month, 1)
    let calendarDiv = document.getElementById("cal")
    let dayHTML = document.createElement("div")
    let totalDays = new Date(2021, month+1, 0).getDate()
    console.log(`Total days in ${month} is ${totalDays}`)
    dayHTML.classList.add("day")
    dayHTML.style.gridColumnStart = date.getDay()
    dayHTML.innerText = date.getDate()
    calendarDiv.innerHTML = ""
    calendarDiv.appendChild(dayHTML)
    

    for (let i = 2; i <= totalDays; i++){
        date = new Date(2021, month, i)
        console.log(i)
        let dayHTML = document.createElement("div")
        dayHTML.classList.add("day")
        dayHTML.innerText = date.getDate()
        calendarDiv.appendChild(dayHTML)
    }
}

document.addEventListener("DOMContentLoaded", start())

function start(){
    let today = new Date(2021, 4, 1)
    console.log(today.getDay())
    console.log(today.getDate())
    console.log(today.getMonth()+1)
    console.log(today.getFullYear())

    fillCalendar(currentDisplayMonth)
}