<template>
  <center>
    <br><br>
    <h2>Scrab</h2>
    <br><br><br>
    <span v-if="connectStatus.error" class="label label-error">{{ connectStatus.error }}</span>
    <br><br>
    <i v-if="connectStatus.loading" class="loading"/>
    <button v-else class="btn btn-primary" @click.prevent="connect()">Connexion</button>
    <br><br>
  </center>
</template>

<script>
import guards from '../router/guards'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'auth',

  beforeRouteEnter: guards.notConnected,
  beforeRouteUpdate: guards.notConnected,

  computed: mapGetters(['connectStatus', 'isConnected']),

  watch: {
    isConnected: {
      handler () {
        if (this.isConnected) {
          this.$route.push({ name: 'home' })
        }
      },
      immediate: true
    },
    connectStatus: {
      handler () {
        if (!this.connectStatus.loading && !this.connectStatus.error) {
          this.connect()
        }
      },
      immediate: true
    },
  },

  methods: mapActions(['connect'])
}
</script>
