<template>
    <h1 v-bind:class="titleClass" v-if="type === 'h1'">
        {{text}}
    </h1>

    <h2 v-bind:class="titleClass" v-else-if="type === 'h2'">
        {{text}}
    </h2>

    <h3 v-bind:class="titleClass" v-else-if="type === 'h3'">
        {{text}}
    </h3>

    <h4 v-bind:class="titleClass" v-else-if="type === 'h4'">
        {{text}}
    </h4>

    <h5 v-bind:class="titleClass" v-else-if="type === 'h5'">
        {{text}}
    </h5>

    <h6 v-bind:class="titleClass" v-else-if="type === 'h6'">
        {{text}}
    </h6> 
</template>

<script>
export default {
    name: 'titleContent',
    props: {
        text: {
            type: String,
        },
        type: {
            type: String,
        },
        titleClass: {
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>