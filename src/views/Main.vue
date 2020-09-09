<template lang="pug">
.page.main
  .container
    // main-page
    section.content
      ViewStatistic
      .basic-panel
        StaticGame
        .basic-right
          .info-text Чтобы вносить предметы в игру, <a href="#">необходимо авторизоваться</a> через Steam
          if aut == true
            a.btn-steam(href="#")
              svgIcon(name='ic-gun')
              | Внести предметы
          else
            a.btn-steam(href="#")
              svgIcon(name='steam')
              | Войти через Steam
      TimerProgressPanel
      TimerItems
      .fair-game
        .fair-game__left
          .fair-game__top
            a.fair-game--btn(href="#")
              svgIcon(name='ic1')
              | Честная игра
            .fair-game-hex
              .title ИГРА НАЧАЛАСЬ
              .hex <span>Хэш:</span> c2ec4a1157b2b60554503697f7e1f0c0
          .fair-game-scroll
            .fair-game--scrolling
              FireGameList

        .btns-image
          a.btn-komissia(href="#")
            span.btn-wrap
              svgIcon(name='sale3')
              span.text Снизь комиссию на 3%! Добавь в ник <strong>CSLOTS.RU</strong>
          a.btn-stavka(href="#")
            span.btn-wrap
              svgIcon(name='sale1')
              span.text Ставка минимум <strong>1 руб</strong>. <br>Максимум предметов: <strong>10</strong>
</template>
<script>



export default {
  name: 'Index',
  components: { },
  mounted () {
    $(function() {
      $(".fair-game-scroll").niceScroll(".fair-game--scrolling",{cursorwidth:"4px",cursorborder: 'none', cursorcolor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.1)', bouncescroll: false, nativeparentscrolling: true, autohidemode: false,  railoffset: {  left: 10, right: 10, bottom: 5, top: 0 }}).resize();
      $(".scrolling").niceScroll(".scroll-line",{cursorwidth:"4px",cursorborder: 'none', cursorcolor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.1)', bouncescroll: false, nativeparentscrolling: true, autohidemode: false, railoffset: {  left: 0, right: 0, top: 0, bottom: 0 }, railpadding: { top: 0, right: 0, left: 0, bottom: 0 }}).resize();

    });

  }
};
</script>
<style lang="sass">
.basic-panel
  background: #0f1015
  padding: 25px 0px
  border-radius: 24px 24px 0 0
  display: flex
  justify-content: space-between
  +r($hd)
    flex-wrap: wrap

.basic-right
  display: flex
  padding: 0 30px
  align-items: center
  +r($hd)
    width: 100%
    margin-top: 20px
    justify-content: space-between
  +r($sm)
    flex-wrap: wrap
    padding-left: 15px
    padding-right: 15px
    justify-content: center
  .info-text
    max-width: 250px
    color: #fff
    font-size: 12px
    font-weight: bold
    text-align: right
    margin-right: 15px
    +r($sm)
      margin: 0 auto
      text-align: center
      padding-bottom: 15px
    a
      color: #ADFF00
      &:hover
        text-decoration: underline
.btns-image
  width: 530px
  margin-left: 20px
  +r($lg)
    width: 100%
    margin-left: 0
.btn-komissia, .btn-stavka
  border-radius: 24px
  margin-bottom: 20px
  display: flex
  align-items: center
  justify-content: center
  height: 100px
  color: #fff
  text-decoration: none
  font-weight: 500
  font-size: 18px
  +r($lg)
    max-width: 530px
    margin: 0 auto 20px
  .btn-wrap
    display: inline-flex

  .svg-icon
    width: 48px
    height: 48px
    margin-right: 20px
  .text
    flex: 1 1 auto
    max-width: 220px
  strong
    font-weight: 500
.btn-komissia
  background: url(#{$ipath}/btn-mask1.png) 50% 50% no-repeat
.btn-stavka
  background: url(#{$ipath}/btn-mask2.png) 50% 50% no-repeat
</style>
