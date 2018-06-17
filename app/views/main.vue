<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import guards from '../router/guards'

export default {
  name: 'main-index',

  beforeRouteEnter: guards.connected,
  beforeRouteUpdate: guards.connected,

  computed: mapGetters(['isConnected']),

  watch: {
    isConnected: {
      handler () {
        if (!this.isConnected) {
          this.$route.push({ name: 'auth' })
        }
      },
      immediate: true
    }
  }
}
</script>
