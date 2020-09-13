<template lang="pug">
button.btn-add-item(@click="addItem")
  svgIcon(name='ic-gun')
  | Внести предметы
</template>

<script>

import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  name: "BtnAddItem",
  data() {
    return {
      title: '',
      body: '',
    };
  },

  methods: {
    // вызываем action, mapActions из store/ItemsUser с названием fetchPosts
    ...mapActions(['fetchPosts']),

    addItem() {
      this.fetchPosts();
    },

  },
};


</script>

<style lang="sass">


</style>
