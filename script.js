async function getData(e)
{

    e.preventDefault();
    let form = document.forms.searchform;
     let citytextboxele = form.citytextbox;
     let city = citytextboxele.value;
     let API=`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=4238bd4b6430431fb2461407251610&days=3`;
    let res =  await axios.get(API);
     console.log(res.data);
     currentDetail(res.data);
     nextdaydetails(res.data);

}
function currentDetail(data){
let html = `
        <div class="current-details d-flex justify-content-center align-items-center gap-300">
            <div class="left-box text-center">
                <h3 class="location-name">${data.location.name}</h2>
                <h2 class="temp">${data.current.temp_c}</h1>
                <h3 class="condition">${data.current.condition.text}</h3>
                <h5 class="time">${data.location.localtime}</h5>
            </div>

            <div class="right-box d-flex align-items-center">
                <img src="${data.current.condition.icon}" class="weather-icon me-3">
                <div>
                <p class="weather-info">💨 Wind: ${data.current.wind_mph} mph</p>
                <p class="weather-info">💧 Humidity: ${data.current.humidity}%</p>
                </div>

            </div>
        </div>   
`

    let currentDetailsRefele=document.getElementById("currentDetailsRef");
    currentDetailsRefele.innerHTML=html;
}
function nextdaydetails(data){
let forecastArray = data.forecast.forecastday;
    let html = "";

    for (let day of forecastArray) {
        html += `
            <div class="col text-center">
                <h6 style="color: rgba(0, 0, 0, 0.7);">${day.date}</h4>
                <img src="${day.day.condition.icon}">
                <h6 style="color: rgba(0, 0, 0, 0.7);">${day.day.condition.text}</h5>
                <h6 style="color: rgba(0, 0, 0, 0.7);">${day.day.avgtemp_c}°C</h1>
            </div>
        `;
    }

    document.getElementById("nextdaydetailsref").innerHTML = html;
}