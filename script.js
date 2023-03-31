const api_key = '379d8fac207a171daeceacb2885915b5';
const city_name = 'Istanbul';



const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}
    var getResult = (city_name) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
      displayResult(data);
      console.log(data)
    })
    .catch(error => console.log(error));
    }
    
function displayResult(data){
    let cityDOM = document.getElementById('city')
    let tempDOM = document.getElementById('temp')
    cityDOM.innerHTML = data.name
    tempDOM.innerHTML = Math.floor(data.main.temp)+"°"
    let descDOM = document.getElementById('desc')
    descDOM.innerHTML = data.weather[0].main
    const imageDOM = document.getElementById('image')
    if(data.weather[0].main == "Clouds"){
        imageDOM.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        imageDOM.src = "images/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        imageDOM.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        imageDOM.src = "images/mist.png"
    }else if(data.weather[0].main == "Rain"){
        imageDOM.src = "images/rain.png"
    }else if(data.weather[0].main == "Snow"){
        imageDOM.src = "images/snow.png"
    }
    
}

const searchBar =document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)