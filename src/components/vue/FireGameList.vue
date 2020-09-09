<template lang="pug">
// mix fair-item
mixin fairItem()
  .fair-game__item
    .img
      img(src="~@/assets/img/gun.png", alt="")
    .cost <strong>245</strong> р

.fair-game__user
  .fair-game__user--top
    .user-left
      .ava
        img(src="~@/assets/img/ava2.png", alt="")
      .right
        .nick DENDAKTHEBEST
        .vklad Внёс <strong>10 предметов</strong>
          span.price 1374 р.
          | Шанс
          strong 23%
    .bilet Билеты от #4753 до #5785
  .fair-game__items
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
    +fairItem()
</template>

<script>


export default {
  name: "FireGameList",
  components: {}
};


</script>

<style lang="sass">
.fair-game
  display: flex
  +r($lg)
    flex-wrap: wrap
  &__left
    flex: 1 1 auto
    background: #0f1015
    border-radius: 24px
    +r($lg)
      margin-bottom: 20px
  &__top
    background: rgb(35,42,31)
    background: -moz-linear-gradient(left,  rgba(35,42,31,1) 0%, rgba(25,27,33,1) 100%)
    background: -webkit-linear-gradient(left,  rgba(35,42,31,1) 0%,rgba(25,27,33,1) 100%)
    background: linear-gradient(to right,  rgba(35,42,31,1) 0%,rgba(25,27,33,1) 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#232a1f', endColorstr='#191b21',GradientType=1 )
    padding: 8px 10px
    border-radius: 24px 24px 0 0
    backdrop-filter: blur(32px)
    display: flex
    align-items: center
    margin-bottom: 20px
    +r($sm)
      flex-wrap: wrap
  &--btn
    border-radius: 33px 33px 33px 0
    border: 2px solid #ADFF00
    color: #ADFF00
    font-size: 14px
    font-weight: bold
    padding: 15px 30px
    display: inline-block
    vertical-align: top
    margin-right: 20px
    +r($sm)
      margin-right: 0
      width: 100%
      border-radius: 33px
      margin-bottom: 20px
      text-align: center
    .svg-icon
      position: relative
      top: 2px
      margin-right: 10px
    &:hover
      background: $clrYell
      border-color: $clrYell
      color: #1F1F1F
      .svg-icon
        fill: #1F1F1F

  &-hex
    .title
    font-size: 14px
    font-weight: bold
    color: #fff
    padding: 3px 0
    .hex
      font-size: 14px
      font-weight: 500
      span
        color: #A8AEBF
  &-scroll
    max-height: 270px
    overflow: auto
  &__user
    background: #1C1E26
    padding: 10px
    border-radius: 23px
    margin: 0 20px 20px
    +r($sm)
      margin: 0 0 20px
    .user-left
      display: flex
      +r($sm)
        margin-bottom: 15px
    &--top
      display: flex
      justify-content: space-between
      margin-bottom: 15px
      +r($sm)
        flex-wrap: wrap
      .ava
        min-width: 48px
        max-width: 48px
        height: 48px
        margin-right: 20px
        overflow: hidden
        position: relative
        border-radius: 20px
      .right
        font-size: 14px
      .nick
        font-weight: bold
        padding-bottom: 3px
      .vklad
        color: #A8AEBF
        strong
          color: #fff
          font-weight: 500
      .price
        color: #0F1015
        font-weight: 500
        padding: 2px 5px 0 8px
        display: inline-block
        vertical-align: middle
        margin: 0 7px
        background: #ADFF00
        border-radius: 33px
    .bilet
      color: #A8AEBF
      font-weight: bold
  &__items
    margin-right: -3px
  &__item
    background: #0F1015
    border: 1px solid #2A2E37
    border-radius: 24px
    padding: 8px 5px 5px
    text-align: center
    font-size: 11px
    width: 73px
    margin-right: 7px
    margin-bottom: 10px
    display: inline-block
    vertical-align: top
    .img
      height: 45px
      margin-bottom: 5px
    .cost
      color: #A8AEBF
      strong
        color: #fff
        font-weight: 500

</style>
