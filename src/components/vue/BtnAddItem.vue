<template lang="pug">
button.btn-add-item(@click="addItem" v-bind:disabled="{ disabled: g_statusTime }")
  svgIcon(name='ic-gun')
  | Внести предметы
</template>

<script>

import {mapActions, mapGetters, mapMutations} from 'vuex';
let itemUserCount = 0;
const itemUserCountAll = 10;

export default {
  name: "BtnAddItem",
  data() {
    return {
      // itemUserCount: 1
    };
  },
  computed: {
    ...mapGetters(['g_statusTime']),
    GstatusTime() {
      return this.$store.getters.g_statusTime
    }
  },
  methods: {
    // вызываем action, mapActions из store/ItemsUser с названием fetchPosts
    ...mapActions(['fetchItemUser']),
    ...mapGetters(['itemUserCount']),
    ...mapMutations(['mstatusTime']),

    addItem() {

      if(itemUserCount !== itemUserCountAll){
        itemUserCount++;
        this.fetchItemUser(itemUserCount);
        this.itemUserCount(itemUserCount);
        $(function () {

          $(".scrolling").niceScroll(".scroll-line", {
            cursorwidth: "4px",
            cursorborder: 'none',
            cursorcolor: 'rgba(255, 255, 255, 0.1)',
            background: 'rgba(255, 255, 255, 0.1)',
            bouncescroll: false,
            nativeparentscrolling: true,
            autohidemode: false,
            railoffset: {left: 0, right: 0, top: 0, bottom: 0},
            railpadding: {top: 0, right: 0, left: 0, bottom: 0}
          }).resize();
        });
      }
    },
  },
};


</script>

<style lang="sass">


</style>
