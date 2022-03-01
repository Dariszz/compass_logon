<template>
    <div>
        <loginLeft />
        <loginRight />
    </div> 
</template>

<script>

import loginLeft from '@/containers/loginLeft/index.vue'
import loginRight from '@/containers/loginRight/index.vue'

export default {
  components: {
      loginLeft,
      loginRight,
  }
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        height: 100vh;
        width: 100%;
    }
</style>
