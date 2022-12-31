const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const newYear = document.querySelector('#new-year')

const now = new Date()

newYear.innerHTML = now.getFullYear()

const countToDate = new Date(now.getFullYear() + 1, 0, 1).getTime()

const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})

const control_function = () => {
    document.querySelector('.header').style.visibility = 'visible';
    document.querySelector('.timer').style.display = "none";
    fireworks.start()
    newYear.innerHTML = new Date().getFullYear()
    clearInterval(countdownInterval)
}

const countdown = () => {
    if(now.getFullYear() == '2022'){
        document.querySelector('.header').style.display = "none";
        console.log('2022');
        const now = new Date().getTime()

        const distance = countToDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        daysSpan.innerHTML = days
        hoursSpan.innerHTML = hours
        minutesSpan.innerHTML = minutes
        secondsSpan.innerHTML = seconds

        if (distance < 0) {
            control_function()
            clearInterval(countdownInterval)
        }
    } else if(now.getFullYear() == '2023'){
        console.log('2023');
        control_function()
    }
}

countdown()

const countdownInterval = setInterval(countdown, 1000)
window.location.reload();