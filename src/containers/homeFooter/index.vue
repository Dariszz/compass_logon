<template>
    <div>
        <textContent textClass="footerText" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
         Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar." />
         <span><div id="divSpan"></div></span>
         <div id="refresh">
            <textContent textClass="refreshContent" text="Application refresh in" />
        </div>
        <div id="timer">
             <timer />
             <textContent textClass="seconds" text="seconds" />
         </div>
        <div id="continueFooterTest">
            <textContent textClass="continueFooter" text="Continuar navegando" />
        </div>
        
         <div id="footerButton" @click="execLogout">Logout</div> 
         
    </div>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import timer from '@/components/timer/index.vue'
import router from '@/router/index.js'
import { mapMutations } from 'vuex'
export default {
    components: {
        textContent,
        timer
    },
    methods: {
        ...mapMutations(["resetError"]),
        execLogout(){
            router.push({name: 'Login'})
            this.resetError()
        }
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>