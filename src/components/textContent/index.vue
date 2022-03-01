<template> 
    <p v-bind:class="textClass">{{text}}</p>
</template>

<script>
    export default {
        props: {
            textClass: {
                type: String,
            },
            text: {
                type: String,
                default: "Texto padrão."
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>