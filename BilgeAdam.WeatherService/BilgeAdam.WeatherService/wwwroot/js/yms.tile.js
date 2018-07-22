yms.components = {};
yms.components.tile = Vue.component('yms-tile', {
    template: "#weatherTile",
    props: ['query'],
    data: function () {
        var data = yms.models.weather;
        yms.ajax.get(this.$props.query, function (r) {
            data = r;
        });
        return data;
    },
    methods: {
        load: function (query) {
            yms.ajax.get(query, function (r) {
                yms.models.weather = r;
            });
        }
    }
});
new Vue({
    el: '#root'
});
yms.components.search = Vue.component("yms-search", {
    template: '<input type="text" placeholder="Search" data-role="input" v-model="query" v-on:keyup.enter="search" />',
    data: function () {
        return { query : "" };
    },
    methods: {
        search: function () {
            yms.components.tile.options.methods.load(this.query);
            this.query = "";
        }
    }
});

new Vue({
    el: '#searchArea'
});