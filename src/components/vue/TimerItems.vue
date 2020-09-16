<template lang="pug">
// mix item-scroll
mixin itemScroll()
  .scroll-item
    .scroll-item__ava
      span
        img(src="~@/assets/img/ava2.png", alt="")
    .scroll-item__break
      .score 23.9
      | шанс
.b-scroll-item
  .scrolling
    .scroll-line
      .scroll-item(v-for="item in ItemsUser" :key="item.id")
        .scroll-item__ava
          span
            img(src="~@/assets/img/ava2.png", alt="")
        .scroll-item__nick {{item.id}}
        .scroll-item__break
          .score 23.9
          | шанс



</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StaticGame",
  computed: mapGetters(['ItemsUser']),
  methods: mapActions(['fetchItemUser']),
  // регистрируем как компонент PostForm
  components: {},
  async mounted() {
    // this.$store.dispatch("fetchPosts"); вызываем action, первым параметром передаем название экшена т.е. "fetchPosts"
    // this.fetchPosts(); обращаемся уже через mapAction внутренний метод

  }
};


</script>

<style lang="sass">
.b-scroll-item
  background: #0f1015
  border-radius: 24px
  padding: 15px
  margin-bottom: 30px
  .scrolling
    overflow: auto
    max-width: 1420px
    flex: 1 1 auto
    padding-bottom: 15px
    width: 100%
  .scroll-line
    white-space: nowrap
    display: inline-flex

.scroll-item
  width: 104px
  border: 1px solid #2A2E37
  border-radius: 17px
  margin: 0 10px
  text-align: center
  padding: 10px 0
  position: relative
  z-index: 1
  display: block
  &:after
    height: 61%
    width: 100%
    left: 0
    z-index: -1
    border-radius: 0 0 17px 17px
    bottom: 0
    content: ""
    background: #1c1e26
    position: absolute
  &__ava
    border-radius: 70px
    overflow: hidden
    margin: 0 auto
    max-width: 75px
    span
      width: 68px
      display: inline-block
      border-radius: 30px
      overflow: hidden

  &__break
    font-size: 11px
    color: #B3B6C5
    font-weight: bold
    .score
      color: $clrGreen
      font-weight: 400
      font-size: 12px
      font-family: $font2

</style>
