<template lang="pug">
button.btn-add-item
  svgIcon(name='ic-gun')
  | Внести предметы
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  name: "BtnAddItem",
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    ...mapMutations(['createPost']),
    click() {
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
