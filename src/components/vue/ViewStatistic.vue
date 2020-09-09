<template lang="pug">
.top-blocks
  .b-info-top.yell
    .b-content
      .icon
        svgIcon(name='ic-star')
      .text
        .title Джекпот
        .num 25179
  .b-info-top
    .b-content
      .icon
        img(src="~@/assets/img/ic-people.png", alt="")
      .text
        .title Онлайн
        .num 137
  .b-info-top
    .b-content
      .icon
        img(src="~@/assets/img/ic-games.png", alt="")
      .text
        .title Игр сегодня
        .num 415
  .b-info-top
    .b-content
      .icon
        img(src="~@/assets/img/ic-people.png", alt="")
      .text
        .title Пик игроков
        .num 3745
  .b-info-top.big
    .b-content
      .b-info-top__up
        .bilet-wine Победный билет: -
        a.btn-verif(href="#") Проверить
      .b-bilet-wine
        .ava
          img(src="~@/assets/img/ava.png", alt="")
        .right
          .title Победитель
          .result -
      .winning
        .title Выигрыш
        .result -

</template>

<script>
export default {
  name: "ViewStatic",
  components: {

  }
};


</script>

<style lang="sass">
.top-blocks
  margin: 0 -10px
  display: flex
  +r($lg)
    flex-wrap: wrap
.b-info-top
  padding: 10px 30px
  height: 100px
  display: flex
  align-items: center
  justify-content: center
  border-radius: 24px
  background: #16181e
  margin: 0 10px 30px
  width: 33%
  max-width: 175px
  +r($lg)
    max-width: calc(33% - 20px)
  +r($sm)
    max-width: calc(50% - 20px)
    width: 50%
    padding-left: 15px
    padding-right: 15px
  &.yell
    background: rgb(68,55,20)
    background: -moz-linear-gradient(45deg,  rgba(68,55,20,1) 0%, rgba(22,24,30,1) 58%)
    background: -webkit-linear-gradient(45deg,  rgba(68,55,20,1) 0%,rgba(22,24,30,1) 58%)
    background: linear-gradient(45deg,  rgba(68,55,20,1) 0%,rgba(22,24,30,1) 58%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#443714', endColorstr='#16181e',GradientType=1 )

  .b-content
    display: flex
  .icon
    min-width: 32px
    max-width: 32px
    margin-right: 10px
  .svg-icon
    width: 32px
    height: 32px
  .text
    font-size: 16px
    color: #fff
    font-weight: 400
    font-family: $font2
    letter-spacing: 1px
  .title
    font-size: 12px
    color: #B3B6C5
    font-family: $baseFont
    letter-spacing: 0
  &.big
    flex: 1 1 auto
    max-width: 100%
    .b-content
      width: 100%
      flex-wrap: wrap
      display: flex
      justify-content: space-between
  &__up
    display: flex
    justify-content: space-between
    font-size: 12px
    font-weight: bold
    width: 100%
    padding-bottom: 9px
    .btn-verif
      color: #ADFF00
  .b-bilet-wine
    max-width: 45%
    display: flex
    .ava
      width: 35px
      min-width: 35px
      margin-right: 10px
    .right
      flex: 1 1 auto

  .winning
    max-width: 45%
    background: url(#{$ipath}/money.png) 100% 0 no-repeat
    padding-right: 45px
    text-align: right

</style>
