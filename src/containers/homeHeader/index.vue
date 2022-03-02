<template>
    <div>
        <img src="@/assets/black_logo.png" alt="">
        <textContent textClass="clock" text="Aqui vem o relógio."/>
        <textContent textClass="weather" text="Aqui vem o clima."/>
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