new Vue({
    el: "#app",
    data: {
        message: "Hello World!"
    },
    methods: {
        something: function (){
            this.message = "Yay, it works!";
        }
    }
})