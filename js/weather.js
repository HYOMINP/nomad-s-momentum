navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_id = '2644c4e66211936d8c0323ad4b8152f4';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const place = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            place.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function error(){
    alert = "sorry."
}