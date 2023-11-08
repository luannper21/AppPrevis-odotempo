const key ="f0d59a93d77c6a65067e812f924f24bb"


function DadosTela(dados){
document.querySelector('.titulo-cidade').innerHTML="Tempo em" + dados.name
document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + " °C"
document.querySelector('.img-previssao').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
document.querySelector('.Umidade').innerHTML = "umidade é" +" "+ dados.main.humidity
document.querySelector('.previssao-texto').innerHTML = dados.weather[0].description
document.querySelector('.Umidade').innerHTML = Math.floor(dados.main.temp) + " % umidade relativa"
}




async function Buscardados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosTela(dados)
}


function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    Buscardados(cidade)
}