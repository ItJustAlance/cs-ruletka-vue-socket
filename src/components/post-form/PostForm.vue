<template lang="pug">
.b-post-form
  form(@submit.prevent="submit")
    input(type="text" placeholder="title" v-model="title")
    input(type="text" placeholder="body" v-model="body")
    button(type="submit") Create Post
  hr
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now(),
      });
      this.title = this.body = '';
    },

  },
};
</script>

<style lang="sass">


</style>
