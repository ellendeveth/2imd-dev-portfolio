export default class App {
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.lat = 0;
        this.lng = 0;
        
        this.getLocation();
    }
    checkLocalStorage(){
        if(localStorage.getItem("weather") === null){
            this.getWeather();
        } else {
            //get weather from localstorage
            let weather = localStorage.getItem("weather");
            weather = JSON.parse(weather);
            let timeNow = Math.round(Date.now());
            if(timeNow - weather.time > 3600){
                localStorage.clear();
                this.getWeather();
            }
        }
    }
    getLocation(){ //een goede functie doet max 1 ding
        //console.log("getting location");
        navigator.geolocation.getCurrentPosition(
            this.locationSuccess.bind(this), 
            this.locationError.bind(this)
        );

    }

    locationSuccess(location){
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        //console.log(this.lat);
        this.checkLocalStorage();
       
    }

    getWeather(){
        console.log("getting weather");
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.lat}&lon=${this.lng}&APPID=${this.API_KEY}`;
        console.log(url);
        fetch(url)
            .then( res => {
                return res.json();
            })
            .then((json)=>{
                console.log(json);
                this.printWeather(json);
                //set response into localstorage
                let weather = {"description": json.weather[0].main, "temperature": json.main.temp, "time": Math.round(new Date().getTime()/1000)};
                localStorage.setItem('weather', JSON.stringify(weather));
            }).catch( err => {
                console.log(err);
            }).finally( () => {
                console.log("finally done");
            });
    }

    printWeather(json){
        let summary = json.weather[0].description;
        let temp = Math.round(json.main.temp);
        document.querySelector("h1").innerHTML = "Today we have a " + summary;
        document.querySelector("h2").innerHTML = "It is " + temp + "°C";
        if(temp < 10){
            this.getHotDrinks();
            
        } else {
            this.getColdDrinks();
           
        }
    }

    getHotDrinks(){
        console.log("getting hot drinks");
        let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
        console.log(url);
        fetch(url)
            .then( result => {
                return result.json();
            })
            .then((json)=>{
                console.log(json);
                this.printHotDrink(json);
            });
    }
    getColdDrinks(){
        console.log("getting cold drinks");
        let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
        console.log(url);
        fetch(url)
            .then( result => {
                return result.json();
            })
            .then((json)=>{
                console.log(json);
                this.printColdDrink(json);
            });
    }

    printHotDrink(json){
        let drink = json.drinks[13].strDrink;
        console.log(drink);
        let src = json.drinks[13].strDrinkThumb;
        document.querySelector("#img").src = src;
        document.querySelector("p").innerHTML = "Come and get a " + drink;
    }
    printColdDrink(json){
        let drink = json.drinks[59].strDrink;
        console.log(drink);
        let src = json.drinks[59].strDrinkThumb;
        document.querySelector("#img").src = src;
        document.querySelector("#drink").innerHTML = "Come and get a " + drink;
    }

    locationError(err){
        console.log(err);
    }
}