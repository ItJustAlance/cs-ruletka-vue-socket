<template lang="pug">
.over
  #app
    Header
    // router-link(to="/about") route about
    // router-link(to="/") route home
    router-view
</template>

<script>

import Header from '@/components/header/Header';

export default {
  name: 'app',
  components: {Header },


};


</script>

<style lang="sass"  scoped>

</style>
