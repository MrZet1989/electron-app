// 184c502b199a8f4e3be237706fb41d8e - apiKey

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let tempBlock = document.querySelector('#temp')
let cityBlock = document.querySelector('#city')
let local_date = document.querySelector('#local-date')
let searchInp = document.querySelector('.search')

setInterval(() => {
  let date = new Date;
  local_date.textContent = `Local time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)

let city = 'London';

document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    let value = searchInp.value;
    if(!value) return false;
    city = value;
    init()
    searchInp.value = ''
  }
})


function init() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=184c502b199a8f4e3be237706fb41d8e`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      tempBlock.textContent = `${temperature()}°C`
      cityBlock.textContent = `City: ${data.name}`
      console.log()

      function temperature() {
        let getTemp = data.main.temp
        let tempC = Math.floor(getTemp) - 273
        return tempC
      }

      let date = new Date;

      console.log('перезапуск')

    })
    .catch((error) => {
      console.log(error)
    })
}

init()
setInterval(()=>{
  init()
}, 10000)