var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


function success(pos) {

    var crd = pos.coords;
    console.log(pos.coords)
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    const cityCode = '2023469';
    //const requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id='+cityCode+'&appid=30fa49e0faa049ae7d4a8c33a2805cfb';
    const coordsURL = 'http://api.openweathermap.org/geo/1.0/direct?q=Сочи&appid=30fa49e0faa049ae7d4a8c33a2805cfb'
    const requestURL = 'https://api.weatherapi.com/v1/current.json?key=f61939e47f8344b2999123505220606&q='+lat+','+lon+'&aqi=yes';

    const xhr_name = new XMLHttpRequest();
    xhr_name.open('GET', requestURL);
    xhr_name.responseType = 'json';


    xhr_name.onload = () => {

        console.log(xhr_name.response);

        if(xhr_name.response.current.is_day == 0){
            document.querySelector("#mainwrap").classList.remove("day");
            document.querySelector("#mainwrap").classList.add("night");
        }
        let city = xhr_name.response.location.region;
        let temp = xhr_name.response.current.temp_c;
        let desc = xhr_name.response.current.condition.text;
        document.querySelector("#maincity").innerHTML = city;
        document.querySelector("#maindesc").innerHTML = desc;
        document.querySelector("#maintemp").innerHTML = temp;
        document.querySelector("#temp1").innerHTML = temp + '°';
        icon_URL = "url('https://"+xhr_name.response.current.condition.icon.slice(2)+"')";
        console.log(icon_URL);
        document.getElementById('icon1').style.backgroundImage = icon_URL;
        document.getElementById('feels_like').innerHTML = Math.round(xhr_name.response.current.feelslike_c) + '°';
        document.getElementById('pressure').innerHTML = Math.round(xhr_name.response.current.pressure_in) + ' mm of merc.';
        document.getElementById('humidity').innerHTML = Math.round(xhr_name.response.current.humidity) + '%';
        document.getElementById('wind').innerHTML = Math.round(xhr_name.response.current.wind_mph) + ' mph';

        const xhr_fc = new XMLHttpRequest();
        xhr_fc.open('GET', 'https://api.weatherapi.com/v1/forecast.json?key=f61939e47f8344b2999123505220606&q='+lat+','+lon+'&aqi=yes');
        xhr_fc.responseType = 'json';

        xhr_fc.onload = () => {
            console.log(xhr_fc.response);

            for(let i = 1; i < 5; i ++){
                document.querySelector("#time"+(i+1)).innerHTML = parseInt(xhr_fc.response.forecast.forecastday[0].hour[i+i].time.slice(11, 13));
                document.querySelector("#temp"+(i+1)).innerHTML = parseInt(xhr_fc.response.forecast.forecastday[0].hour[i+i].temp_c) + '°';
                icon_URL = "url('https://"+xhr_fc.response.forecast.forecastday[0].hour[i+i].condition.icon.slice(2)+"')";
                document.getElementById('icon'+(i+1)).style.backgroundImage = icon_URL;
            }
        }

        xhr_fc.send();

    }


    function sendXHR() {
        xhr_name.send(); 
    }


    sendXHR();

};
  
function error(err) {
    console.log('AAAAAAA');
};


navigator.geolocation.getCurrentPosition(success, error, options);



