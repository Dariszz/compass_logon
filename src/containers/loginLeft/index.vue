<template> 
    <section>
        <div id="containerLogin">

            <titleContent type="h1" titleClass="helloLogin" text="Olá,"/>
            <textContent textClass="messageHello" text="Para continuar navegando de forma segura, efetue o login na rede."/>
            
        </div>
    </section>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import titleContent from '@/components/title/index.vue'
    export default {
        name: 'loginLeft',
        components: {
            titleContent,
            textContent,
        },
    }
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>