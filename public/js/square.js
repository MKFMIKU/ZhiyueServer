Vue.http.options.emulateJSON = true;
Vue.config.devtools = true;

new Vue({
    el: '#main',
    ready: function () {
        this.$http.get('/api/square/get').then(function (response) {
            this.$set('tweets', response.json().result);
        });
        console.log(this.tweets);
    },
    data: {
        tweets: ""
    }
});