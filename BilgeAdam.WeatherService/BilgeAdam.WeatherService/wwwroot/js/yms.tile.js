Vue.component('yms-tile', {
    template: "#weatherTile",
    props: ['query'],
    data: function () {
        var data = yms.models.weather;
        yms.ajax.get(this.$props.query, function (r) {
            data = r;
        });
        return data;
    }
});

new Vue({
    el: '#root'
});