Vue.http.options.emulateJSON = true;
Vue.config.devtools = true;

new Vue({
    el: "#content",
    data: {
        user: {}
    },
    methods: {
        sub: function () {
            this.$http.post('/api/account/sign', this.user, {emulateJSON: true}).then(function (res) {
                if (res) alert("注册成功");
            });
        }
    }
});