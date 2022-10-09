var x=document.getElementsByClassName("notification");
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const time = today.toUTCString();

var day = "";
for (let i = 0; i < time.length; i++) {
    
    day += time.charAt(i);
    if (time.charAt(i) === ",") {
        day = day.slice(0,-1);
        i = time.length;
        
    }
       
  }

const list_day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
document.querySelector('.dateTime').innerText = time 


let weather = {
    //openweathermap
    apiKey:"5c3cd18cc13c1feb92f2cfef7d101d74",
    

    //by city
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
        ).then((response) => response.json() )
        .then((data) => this.displayWeather(data) );
        fetch(`https://pro.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${this.apiKey}`
        ).then((response) => response.json() )
        .then((data) => this.otherWeather(data) );
    },

    //by geographical coordinates
    fetchWeather2: function(lat, long){
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json() )
        .then((data) => this.displayWeather(data) );
        
    },

    //for other 6 days
        
    fetchWeather3: function(lat,long){
        // console.log(`https://pro.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=7&APPID=${this.apiKey}`);
        fetch(`https://pro.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=7&APPID=${this.apiKey}`
        ).then((response) => response.json() )
        .then((data) => this.otherWeather(data) );
    },
    //current weather
    displayWeather: function(data) {
        
        let { name } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        if (temp > 273){
            temp = (temp - 273).toFixed(2);
        }
        const { speed } = data.wind;
        document.querySelector(".city").innerText = `Today's Weather in ${name}`;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Speed: " + speed +"km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1500x1000/?" + name +"')";
   
    },
    //for other 6 days
    otherWeather: function(data){
        let i = 1;
        
        for(i;i<7;i++){
            let idx = list_day.indexOf(day);
            idx=(idx + i) % 7;
            document.querySelector(`.icon${i}`).src="https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            document.querySelector(`.day${i}`).innerText = list_day[idx];
            document.querySelector(`.description${i}`).innerText = data.list[i].weather[0].description;
            document.querySelector(`.temp${i}-max`).innerText = `Max: ${(data.list[i].temp.max - 273).toFixed(2)+"°C"}`;
            document.querySelector(`.temp${i}-min`).innerText = `Min: ${(data.list[i].temp.min - 273).toFixed(2)+"°C"}`;
            
        };
    },
    search: function(){ //take name of city
        this.fetchWeather(document.querySelector(".search-txt").value);
    }
};

document.querySelector(".search-box button").addEventListener("click",function(){//set click funtion to search button
    
    weather.search();
});

document.querySelector(".search-txt").addEventListener("keyup",function(event){ //work when pressing Enter Key
    if (event.key == "Enter"){
        weather.search();
    }
})





async function fetchLoc(){
    
    if ('geolocation' in navigator){ //check location 
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
        document.querySelector(".dateTime").innerHTML = time; //show time, date, day
    }

    function setPosition(position){
        
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        weather.fetchWeather2(lat, long);
        weather.fetchWeather3(lat, long);
    }

    function showError(error){
        //if location can't be accessed, show weather of Delhi
        weather.fetchWeather("Delhi");
        document.querySelector(".notification").innerHTML = "Your location can't be accessed.";
    }
}





//call function
fetchLoc();

