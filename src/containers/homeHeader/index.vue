<template>
    <div>
        <img src="@/assets/black_logo.png" alt="">
        <div id="clockDate">
            <textContent textClass="clock" text="22:12"/>
            <textContent textClass="date" text="Terça-feira, 01 de março de 2022"/>
        </div>

        <div id="weather">
            <textContent textClass="locale" text="Juiz de Fora - MG"/>
            <textContent textClass="degree" text="27°"/>
        </div>
    </div>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
// import titleContent from '@/components/title/index.vue'
export default {
    components: {
        textContent,
        // titleContent
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>