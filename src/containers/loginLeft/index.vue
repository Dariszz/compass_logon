<template> 
    <section>
        <div id="containerLoginPage">
            <div id="containerLogin">
                <titleContent type="h1" titleClass="helloLogin" text="Olá,"/>
                <textContent textClass="messageHello" text="Para continuar navegando de forma segura, efetue o login na rede."/>
            </div>
            <div>
                <titleContent type="h3" titleClass="messageLogin" text="Login"/>
                <form>
                    <Input placeHolder="   Usuario" type="text" titleClass="textLogin" src="logo_user" />
                    <Input placeHolder="   Senha" type="password" titleClass="passwordLogin" src="logo_password" />                   
                    <div id="error">
                        <textContent textClass="messageError" text="Ops, usuário ou senha inválidos. Tente novamente!"/>
                    </div>
                    <Input type="submit" value="Continuar" button=true titleClass="buttonInput" />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import titleContent from '@/components/title/index.vue'
import Input from '@/components/input/index.vue'
    export default {
        name: 'loginLeft',
        components: {
            titleContent,
            textContent,
            Input,
        },
    }
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>