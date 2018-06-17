<template>
  <h2>Auth</h2>
</template>

<script>
import guards from '../router/guards'

export default {
  name: 'auth',

  beforeRouteEnter: guards.notConnected,
  beforeRouteUpdate: guards.notConnected
}
</script>
