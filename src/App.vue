<template lang="pug">
.over
  #app
    Header
    router-link(to="/about") route about
    router-link(to="/") route home

    router-view
</template>

<script>

import SvgIcon from '@/components/SvgIcon';
import PostForm from "@/components/post-form/PostForm";
import Header from "@/components/header/Header";

export default {
  name: 'app',
  components: {Header, SvgIcon, PostForm },


};
</script>

<style lang="sass"  scoped>

</style>
