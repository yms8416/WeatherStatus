//IIFE -> Immediately Invoke Function Expressions
var yms = {
    models: {
        weather: {
            city: "",
            temperature: 0,
            humidity: 0,
            seaLevel: 0,
            pressure: 0,
            text : "",
            icon: "",
            forecast: []
        }
    }
};

(function (y) {
    y.ajax = y.ajax || {};
    y.ajax.get = function (q, callBack) {
        if (!q) {
            Metro.notify.create("Arama verisi bulunamadı", "Hata", { cls: "alert" });
            return y.models.weather;
        }
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + q + "&appid=12e8264f20376f5fe8c026209eb922f0&units=metric",
            dataType: "json",
            contenType: "json",
            crossDomain: true
        }).done(function (data) {
            var result = y.models.weather;
            var main = data.list[0].main;
            var weather = data.list[0].weather[0];

            result.city = data.city.name;
            result.humidity = main.humidity;
            result.pressure = main.pressure;
            result.seaLevel = main.sea_level;
            result.temperature = main.temp;
            result.text = weather.main;
            if (callBack) {
                callBack(result);
            }
        }).fail(function (e, m) {
            Metro.notify.create("Veri okunamadı", "Hata", { cls: "alert" });
        });
    }
})(yms);