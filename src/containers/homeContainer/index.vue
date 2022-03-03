<template>
    <div>
        <div id="ballLogo">
            <img src="@/assets/ball_logo_compass.png" alt="" draggable="false">
        </div>
         <div id="content">
             <titleContent type="h1" titleClass="titleHome" text="Our mission is"/>
             <textContent textClass="textHome" text="Nossa missão é" />
             <titleContent type="h2" titleClass="titleHomeContainer" text="to transform the world"/>
             <textContent textClass="textHome" text="transformar o mundo" />
             <titleContent type="h3" titleClass="titleHomeContainer" text="building digital experiences"/>
             <textContent textClass="textHome" text="construindo experiências digitais" />
             <titleContent type="h4" titleClass="titleHomeContainer" text="that enable our client’s growth"/>
             <textContent textClass="textHome" text="que permitam o crescimento dos nossos clientes" />
         </div>
    </div>
  
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import titleContent from '@/components/title/index.vue'
export default {
    name: 'homeContainer',
    components: {
        textContent,
        titleContent
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>