export default class App {
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.lat = 0;
        this.lng = 0;
        
        this.getLocation();
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
        this.getWeather();
        this.getDrinks();
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
            }).catch( err => {
                console.log(err);
            }).finally( () => {
                console.log("finally done");
            });
    }

    printWeather(json){
        let summary = json.weather[0].description;
        let temp = Math.round(json.main.temp);
        document.querySelector("h1").innerHTML = summary;
        document.querySelector("h2").innerHTML = temp + "°C";
    }

    getDrinks(){
        console.log("getting drinks");
        let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
        console.log(url);
        fetch(url)
            .then( result => {
                return result.json();
            })
            .then((json)=>{
                console.log(json);
                this.printDrink(json);
            });
    }

    printDrink(json){
        let drink = json.drinks[13].strDrink;
        console.log(drink);
    }

    locationError(err){
        console.log(err);
    }
}