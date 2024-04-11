let apiKey="119dd3cd230df589d686cd8b2f4eb4ab";
let apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric";
let temperature=document.querySelector("#num");
let city=document.querySelector(".city");
let humidity=document.querySelector("#humidity");
let wind=document.querySelector("#wind");
let cityInput=document.querySelector("#searchBar");
let button=document.querySelector("button");
let image=document.querySelector(".weather-img");
let card=document.querySelector(".card");
let invalid=document.querySelector(".invalid");
let all_display=document.querySelector(".all-display")
let icon=document.querySelector(".icon");

icon.classList.remove("hide");
all_display.classList.add("hide");



button.addEventListener("click",()=>{
    const cityName=cityInput.value;
    icon.classList.add("hide");
    invalid.classList.add("hide");
    card.classList.add("card_bg");
    card.classList.remove("new_card_bg");
    weatherInfo(cityName);
})

async function weatherInfo(cityName){
    let response= await fetch(apiURL+`&appid=${apiKey}`+`&q=${cityName}`);
    let info=await response.json();
    card.offsetWidth;
    if(info.cod==="404"){
            card.style.background="";
            card.classList.add("new_card_bg");
            card.classList.remove("card_bg");
            invalid.classList.remove("hide");
            all_display.classList.add("hide");
    }
    else{
        all_display.classList.remove("hide");
        city.innerText=info.name;
        temperature.innerText=Math.round(info.main.temp);
        humidity.innerText=info.main.humidity+"%";
        wind.innerText=info.wind.speed+" km/h";
        let image1=info.weather[0].main.toLowerCase();
        console.log(image1);
    if(image1==="clear"){
        image.src=image1+".png";
        card.style.background="linear-gradient(135deg,#9fccfa,#0974f1)";
    }
    else if(image1==="clouds"){
        image.src=image1+".png";
        card.style.background="linear-gradient(135deg, #6d90b9, #bbc7dc)";
    }
    else if(image1==="drizzle"){
        image.src=image1+".png";
        card.style.background="linear-gradient(135deg,#e4e7e4,#0a1647)";
    }
    else if(image1==="mist"){
        image.src=image1+".png";
        card.style.background="linear-gradient(135deg,#9bb2e5,#698cbf)";
    }
    else if(image1=="rain"){
        image.src=image1+".png";
        card.style.background="linear-gradient(135deg,#60696b,#9bb2e5)";
    }
    else if(image1==="snow"){
        image.src=image1+".png";
        card.style.background="linear-gradient(135deg,#f6f6f6,#71c3f7)";
    }
    }
};


