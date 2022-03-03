<template>
    <div>
        <img src="@/assets/black_logo.png" alt="" draggable="false">
        <div id="clockDate">
            <clockDate />
        </div>

        <div id="weather">
            <textContent textClass="locale" text="Juiz de Fora - MG"/>
            <textContent textClass="degree" text="27°"/>
        </div>
    </div>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import clockDate from '@/components/clock/index.vue'

export default {
    components: {
        textContent,
        clockDate
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>