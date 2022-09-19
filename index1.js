//query selectors
var cityInput = document.querySelector('.cityName');
var btn1 = document.querySelector('.submitButton');
//event Listeners
btn1.addEventListener('click',function(name){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=5142a079c21f6cb2df156c3a42bfec63`)//fetching api data
    .then(response=>response.json())//text --> json
    .then(data=>{
        let result= `<div><h1>City : ${data.name}</h1> 
            <h1>Temp = ${Math.floor(data["main"].temp-273)} °C</h1>
             <h1> Pressure = ${data["main"].pressure} </h1>
             <h1> humidity = ${data["main"].humidity} </h1>
            <h1> sunrise = ${data["sys"].sunrise}</h1> 
            <h1> sunset =${data["sys"].sunset}</h1> 
            </div>`
            
        let container = document.querySelector(".container")
        container.innerHTML = result
        console.log(data)
        
    }).catch(err=>alert("invalid city name"))

})