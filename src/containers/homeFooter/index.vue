<template>
    <div>
        <textContent textClass="footerText" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
         Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar." />
        <div id="continueFooterTest">
            <textContent textClass="continueFooter" text="Continuar navegando" />
        </div>
         <div id="footerButton">
             <textContent textClass="footerButton" text="Logout" />
         </div> 
    </div>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
export default {
    components: {
        textContent
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>