<template>
    <div>
        <img src="@/assets/black_logo.png" alt="" draggable="false">
        <div id="clockDate">
            <clockDate />
        </div>

        <div id="weather">
            <weather />
        </div>
    </div>
</template>

<script>

import clockDate from '@/components/clock/index.vue'
import weather from '@/components/weather/index.vue'

export default {
    components: {
        clockDate,
        weather
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>