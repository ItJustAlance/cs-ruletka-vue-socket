<template lang="pug">
// HEADER :: START
header.header
  .container
    .b-logo
      a.logo(href='#')
        <img src="@/assets/img/logo.png" alt="">
    .header__icons
      .header__icons--sound
        SvgIcon(name='ic-sound')
      .header__lang
        .header__lang--value
          <img src="@/assets/img/lang.png" alt="">
        .header__lang--list
          ul
            li
              a(href='#')
                span.ic
                  <img src="@/assets/img/lang.png" alt="">
                | ENG
            li
              a(href="#")
                span.ic
                  <img src="@/assets/img/lang.png" alt="">
                | RUS
    a#hamburger-icon
      span.line.line-1
      span.line.line-2
      span.line.line-3
    .header__float
      nav.header__nav
        ul
          li.active
            router-link(to="/ruletka")
              SvgIcon(name="ic1")
              | Рулетка
          li
            router-link(to="/topUsers")
              SvgIcon(name='ic2')
              | Топ игроков
          li
            router-link(to="/historyGame")
              SvgIcon(name='ic3')
              | История игр
      .header__steam
        if aut == true
          .header__login
            .header__login--left
              a.header__login--nick(href="#") DENDAKTHEBEST
              a.header__login--profile(href="#") Профиль
                SvgIcon(name='profile')
            .header__login-ava
              <img src="@/assets/img/ava2.png", alt="">
          a.login-exit(href="#")
            SvgIcon(name='exit')
        else
          a.btn-steam(href="#")
            SvgIcon(name='steam')
            | Войти через Steam

</template>

<script>
import SvgIcon from '@/components/SvgIcon';


export default {
name: "Header",
  components: {SvgIcon },

}
</script>

<style lang="sass">
.active_m
  .header
    &__float
      right: 0
.header
  background: #0e1015
  border-bottom: 2px solid #2a2e37
  height: 100px
  position: relative
  margin-bottom: 30px
  +r($hd)
    height: 60px
  &__float
    width: 50%
    display: flex
    justify-content: space-between
    transition: all 0.5s ease
    +r($hd)
      position: absolute
      top: 0
      right: -100%
      background: #35373F
      width: 90%
      z-index: 2
      max-width: 450px
      flex-wrap: wrap
      padding: 72px 15px 15px
  &__login
    max-width: 300px
    display: flex
    align-items: center
    &--left
      text-align: right
      font-weight: bold
      color: #fff
    &--nick
      color: #A8AEBF
      padding-bottom: 3px
      display: block
    &--profile
      color: #fff
      display: block
      svg
        fill: $clrGreen
        margin-left: 5px
    &-ava
      max-width: 48px
      min-width: 48px
      overflow: hidden
      border-radius: 20px
      height: 48px
      margin-left: 10px
  .login-exit
    display: flex
    width: 32px
    height: 32px
    align-items: center
    justify-content: center
    background: #35373F
    border: 1px solid #4B4E55
    margin-left: 30px
    border-radius: 14px
    +r($hd)
      margin-left: 0
      position: relative
      left: 2px
    &:hover
      .ico
        fill: $clrGreen
    .ico
      width: 13px
      height: 13px
      fill: #A8AEBF

  .container
    display: flex
    align-items: center
    position: relative
    justify-content: space-between

  .b-logo
    background: url(#{$ipath}/molnia.png) 0 50% no-repeat
    height: 100px
    position: relative
    margin-left: -115px
    padding-left: 115px
    display: flex
    align-items: center
    +r($hd)
      height: 60px
  .logo
    display: block
    margin-right: 50px
    +r($sm)
      margin-right: 15px
      width: 140px
  &__icons
    display: flex
    align-items: center
    margin-right: 88px
    +r($sm)
      margin-right: 45px
    &--sound
      cursor: pointer
      width: 32px
      height: 32px
      display: flex
      justify-content: center
      align-items: center
      border-radius: 12px
      background: #35373F
      border: 1px solid #4B4E55
      margin-right: 15px
      svg
        fill: #ADFF00
      &:hover
        border-color: #ADFF00
  &__lang
    position: relative
    background: url(#{$ipath}/arr-lang.png) 100% 13px no-repeat

    display: inline-block
    vertical-align: top
    &.active
      .header__lang--list

    &--value
      cursor: pointer
      padding-right: 21px
    &--list
      display: none
      position: absolute
      top: 105%
      left: 0
      width: 65px
      background: #35373F
      border: 1px solid #4B4E55
      ul
        li
          font-size: 11px
          display: block
          a
            color: #fff
            display: flex
            width: 100%
            padding: 7px 5px
            &:hover
              background: rgba(255,255,255, .1)
              color: #fff
          .ic
            display: block
            width: 20px
            max-width: 20px
          img
            width: 15px
  &__nav
    flex: 1 1 auto
    max-width: 400px
    +r($hd)
      order: 1
      padding-top: 20px
    ul
      display: flex
      align-items: center
      width: 100%
      justify-content: space-between
      +r($hd)
        display: block
      li
        display: flex
        border-bottom: 2px solid rgba(0,0,0, 0)
        height: 100px
        font-weight: bold
        +r($hd)
          height: auto
          width: 100%
          margin-bottom: 20px

        a
          display: inline-flex
          white-space: nowrap
          align-items: center
          border-bottom: 2px solid rgba(0,0,0, 0)
          &:hover, &.router-link-active
            border-bottom: 2px solid #ADFF00
            +r($hd)
              border: none
        .svg-icon
          fill: #ADFF00
          height: 20px
          margin-right: 10px
          width: 20px
          display: inline-block
          vertical-align: top
          position: relative
          top: -2px
  &__steam
    display: flex
    max-width: 340px
    align-items: center
    +r($hd)
      order: 0
      max-width: 100%
      width: 100%
      justify-content: space-between
#hamburger-icon
  width: 22px
  height: 18px
  z-index: 1001
  line-height: 1
  position: absolute
  top: 20px
  right: 15px
  display: none
  color: #ADFF00

body.active_m #hamburger-icon
  height: 20px

#hamburger-icon
  .line
    display: block
    background-color: #ADFF00
    width: 22px
    height: 3px
    position: absolute
    transition: all 0.4s
    -webkit-transition: all 0.4s
    -moz-transition: all 0.4s

  strong
    position: absolute
    left: 100%
    top: 5px
    margin-left: 10px

.active_m .line
  background: #ADFF00

#hamburger-icon
  .line
    &.line-1
      top: 0

    &.line-2
      top: 50%

    &.line-3
      top: 100%

  &:hover .line-1, &:focus .line-1
    transform: translateY(-4px)
    -webkit-transform: translateY(-4px)
    -moz-transform: translateY(-4px)

  &:hover .line-3, &:focus .line-3
    transform: translateY(4px)
    -webkit-transform: translateY(4px)
    -moz-transform: translateY(4px)

+r($xl)
  #hamburger-icon
    display: block
  body.active_m #hamburger-icon
    .line-1
      transform: translateY(10px) translateX(0) rotate(45deg)
      -webkit-transform: translateY(10px) translateX(0) rotate(45deg)
      -moz-transform: translateY(10px) translateX(0) rotate(45deg)

    .line-2
      opacity: 0

    .line-3
      transform: translateY(-10px) translateX(0) rotate(-45deg)
      -webkit-transform: translateY(-10px) translateX(0) rotate(-45deg)
      -moz-transform: translateY(-10px) translateX(0) rotate(-45deg)



</style>
