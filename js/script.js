const key = "941117a9b3d32f6b4e28e904b584f6af"

function showData(data){
  document.querySelector(".cidade").innerHTML = "Tempo em" + " " + data.name
  document.querySelector(".temperatura").innerHTML = Math.floor(data.main.temp) + "ºc"
  document.querySelector(".texto-previsao").innerHTML = data.weather[0].description
  document.querySelector(".texto-tempo").innerHTML = data.main.humidity + "%" + " " + "Umidade"
  document.querySelector(".img-tempo").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

async function searchCity(city){
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  
  showData(data)
}
function clickBtn(){
  const city = document.querySelector(".input-city").value 
  
  searchCity(city)
  cleanInput()
}
function cleanInput() {
  document.querySelector(".input-city").value = ""
}