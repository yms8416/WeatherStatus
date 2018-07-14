Vue.component('yms-tile', {
    template: "<p>Can</p>",
    data: function () {
        var data = yms.models.weather;
        data.city = "Kars";
        data.text = "Cloudy";
        return data;
    }
})