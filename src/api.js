// Base url
const base_url = 'https://api.rawg.io/api'

// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10){
        return `0${month}`
    }else{
        return month
    }
    
}
const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10){
        return `0${day}`
    }else{
        return day
    }
    
}
// Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
console.log(currentDate)

// popular games
const popular_games = 'https://api.rawg.io/api/games?dates='