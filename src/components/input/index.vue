<template>
    <div class="divLogin" v-bind:class="{button:button}">
        <input v-bind:class="titleClass" v-bind:placeHolder="placeHolder" v-bind:type="type" v-bind:value="value">
        <img v-bind:src="require(`@/assets/${src}.png`)" alt="" v-if="src"> 
    </div>
</template>

<script>
export  default {
    name: 'Input',
    props: {
            src: {
                type: String,   
            },
            titleClass: {
                type: String,
            },
            placeHolder: {
                type: String
            },
            type: {
                type: String
            },
            value: {
                type: String
            },
            button: {
                default: false,
            }
        },
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>