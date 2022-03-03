<template>                                 
    <div class="divLogin" v-bind:class="{button:button}"> <!--se a prop button for true, vai aplicar a classe button  -->
        <!-- v-bind:xxx == :xxx -->
        <input v-bind:class="titleClass" :placeHolder="placeHolder" :type="type" :value="value" v-model="model" @input="askMutation">
        <img :src="require(`@/assets/${src}.png`)" alt="" v-if="src" draggable="false"> 
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
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
            },
    },

    data() {
        return {
            model: '',
        }
    },

    methods: {
        ...mapMutations(["attUser", "attPassword"]),
        // chamando a mutation necessária
        askMutation() {
            console.log(this.type, this.model);
            if (this.type == 'text') {
                this.attUser(this.model)
            }else if(this.type == 'password') {
                this.attPassword(this.model)
            }
        }
    },
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>