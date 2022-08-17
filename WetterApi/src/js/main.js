let wetter = 0;
function repeatwetter() {
    $(document).ready(function(){
        const Url = 'https://api.open-meteo.com/v1/forecast?latitude=53.55&longitude=10.26&hourly=temperature_2m&current_weather=true';
            $.getJSON(Url, function(result){
                    gettemperature(result);
                }
            )
    })

    function gettemperature(wetter_var){
        current_weather_var = wetter_var['current_weather'];
        temperature_var = current_weather_var['temperature'];
        document.write(temperature_var + "<br>");
    }

}
setInterval(repeatwetter, 1000)