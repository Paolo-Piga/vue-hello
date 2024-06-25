const { createApp } = Vue;

createApp({
    data() {
        return {
            massage: "Hello World!"
        }
    }
}).mount(".container")