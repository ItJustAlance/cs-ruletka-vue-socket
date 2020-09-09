<template lang="pug">
.basic-icons
  .icon
    .ic
      svgIcon(name="ic-gun")
    .right
      .title Вы вложили
      | 0<span>/10</span>
  .icon
    .ic
      svgIcon(name="pic-clever")
    .right
      .title Шанс
      | 0
  .icon
    .ic
      svgIcon(name="ic1")
    .right
      .title Игра №
      | 527661
  .icon
    .ic
      svgIcon(name="ic-bank")
    .right
      .title Общий банк
      | 2274

</template>

<script>


export default {
  name: "StaticGame",
  components: {}
};


</script>

<style lang="sass">
.basic-icons
  display: flex
  +r($hd)
    width: 100%
    justify-content: space-between
  +r($sm)
    flex-wrap: wrap
  .icon
    display: inline-flex
    width: 175px
    max-width: 30%
    padding: 0 30px
    align-items: center
    margin-right: 20px
    justify-content: center
    +r($sm)
      width: 50%
      max-width: calc(50% - 20px)
      margin: 0 10px 20px
      padding: 0 10px
    +r($xs)
      width: 100%
      max-width: 150px
      margin: 0 auto 20px
    .svg-icon--ic-gun
      fill: #ADFF00
    .svg-icon--pic-clever
      fill: #FFD000
    .svg-icon--ic1
      fill: #fff
    .ic
      width: 32px
      height: 32px
      margin-right: 10px
    .svg-icon
      width: 32px
      height: 32px
  .right
    font-family: $font2
    font-size: 16px
    +r($xs)
      width: 130px
  .title
    font-family: $baseFont
    color: #B3B6C5
    padding-bottom: 3px
    font-size: 12px
  span
    color: #606377

</style>
