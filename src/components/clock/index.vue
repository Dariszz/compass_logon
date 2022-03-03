<template>
    <div id="clock">
        <div id="hour" v-html="clockHours"></div>
        <div id="date" v-html="fullDate"></div>
    </div>    
</template>

<script>

export default {
    name: 'dateClock',

    data() {
        return {
            clockHours: '',
            fullDate: '',
        }
    },

    methods: {
        logicalClock() {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let weekDay = date.getDay();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();

            const arrayDays = new Array(
                "domingo",
                "segunda-feira",
                "terça-feira",
                "quarta-feira",
                "quinta-feira",
                "sexta-feira",
                "sábado-feira"
            );

            const arrayMonths = new Array(
                "janeiro",
                "fevereiro",
                "março",
                "abril",
                "maio",
                "junho",
                "julho",
                "agosto",
                "setembro",
                "outubro",
                "novembro",
                "dezembro"
            );


            let clockHours = `${hours <= 9 ? "0" : ""}${hours}:${minutes <= 9 ? "0" : ""}${minutes}`;
            this.clockHours = clockHours;

            let fullDate = `${arrayDays[weekDay]}, ${day <= 9 ? "0" : ""}${day} de ${arrayMonths[month]} de ${year}`
            this.fullDate = fullDate    ;
        }
    },

    created() {
        setInterval(() => {
            this.logicalClock()
        }, 0);
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>