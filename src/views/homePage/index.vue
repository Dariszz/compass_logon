<template>
    <div>
        <homeHeader />
        <homeContainer />
        <homeFooter />
    </div>
</template>

<script>
import homeHeader from '@/containers/homeHeader/index.vue'
import homeContainer from '@/containers/homeContainer/index.vue'
import homeFooter from '@/containers/homeFooter/index.vue'
export default {
    components: {
        homeHeader,
        homeContainer,
        homeFooter
    }
}
</script>