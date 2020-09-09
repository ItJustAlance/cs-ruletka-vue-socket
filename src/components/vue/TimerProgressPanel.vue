<template lang="pug">
.time-progress-panel
  .progress-block
    .progress
      .progress-bar(style="width: 40%")
      .progress-text 16/100 <span>Предметов</span>
  .progress__and Или через
  .progress__timer
    svgIcon(name='timer')
    | 01:57
</template>

<script>



export default {
  name: "TimerProgressPanel",
  components: {}
};


</script>

<style lang="sass">
.time-progress-panel
  border-radius: 0 0 24px 24px
  padding: 50px 25px
  background: #242c1f
  background: -moz-linear-gradient(left,  #242c1f 0%, #25292d 100%)
  background: -webkit-linear-gradient(left,  #242c1f 0%,#25292d 100%)
  background: linear-gradient(to right,  #242c1f 0%,#25292d 100%)
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#242c1f', endColorstr='#25292d',GradientType=1 )
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  +r($md)
    flex-wrap: wrap
    padding: 15px
    justify-content: center
.progress
  border-radius: 24px
  border: 4px solid #121318
  display: flex
  width: 100%
  justify-content: space-between
  position: relative
  &-block
    background: -moz-linear-gradient(45deg,  rgba(36,44,31,0) 0%, rgba(50,67,24,1) 93%, rgba(50,67,24,1) 94%)
    background: -webkit-linear-gradient(45deg,  rgba(36,44,31,0) 0%,rgba(50,67,24,1) 93%,rgba(50,67,24,1) 94%)
    background: linear-gradient(45deg,  rgba(36,44,31,0) 0%,rgba(50,67,24,1) 93%,rgba(50,67,24,1) 94%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00242c1f', endColorstr='#324318',GradientType=1 )
    height: 54px
    border-radius: 24px
    width: 80%
    padding: 4px
    display: flex
    position: relative
    +r($md)
      width: 100%
      margin-bottom: 20px

  &-bar
    background: url(#{$ipath}/bg-progress.png) 0 0 repeat-x
    border-radius: 24px
  &-text
    position: absolute
    top: 2px
    left: 0
    width: 100%
    text-align: center
    font-size: 16px
    font-family: $font2
    span
      display: block
      color: #B3B6C5
      font-size: 12px
      font-family: $baseFont
  &__and
    width: 12%
    text-align: center
    color: #B3B6C5
    font-size: 12px
    font-weight: bold
    +r($md)
      width: 37%
  &__timer
    font-size: 24px
    color: #fff
    display: inline-flex
    align-items: center
    font-family: $font2
    .svg-icon
      width: 32px
      height: 32px
      fill: #ADFF00
      margin-right: 10px
</style>
