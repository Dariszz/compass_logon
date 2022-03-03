<template>
    <div id="sixHundredSecs" v-html="timerNumber" />
</template>

<script>
import router from "@/router/index.js"
export default {
    name: 'Timer',

    data() {
        return {
            timerNumber: '',
        }
    },
    methods: {
        logicalTimer() {
            let seconds = 600;
            setInterval(() => {
                this.timerNumber = seconds;
                seconds--
            
            if (seconds === 0) {
                router.push({name:'Login'})
            }
        }, 1000);
    }
    },
    created() {
        this.logicalTimer()
    }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>