<template lang="pug">
.time-progress-panel
  .progress-block
    .progress
      .progress-bar(:style="{'width': `${circleDasharray}%`}")
      .progress-text(:class="remainingPathColor") {{itemUserCount}}/{{g_itemUserAll}} <span>Предметов</span>
  .progress__and Или через
  .progress__timer
    svgIcon(name='timer')
    | {{ formattedTimeLeft }}

</template>

<script>

// https://codesandbox.io/s/basetimer-no-parent-control-6frgv?from-embed



const FULL_DASH_ARRAY = 100;
const WARNING_THRESHOLD = 5;
const ALERT_THRESHOLD = 2;


const COLOR_CODES = {
  info: {
    color: ""
  },
  warning: {
    color: "black",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "black",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 9;
import { mapGetters, mapMutations} from "vuex";

export default {
  name: "TimerProgressPanel",

    data() {
      return {
        timePassed: 0,
        timerInterval: null,
        timeEnd: false,
      };
    },
    computed: {
    // к геттерам обращатся через this
      ...mapGetters(['itemUserCount']),

      circleDasharray() {
        return `${100 - (this.timeFraction * FULL_DASH_ARRAY).toFixed(2)}`;
      },

      formattedTimeLeft() {
        const timeLeft = this.timeLeft;
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
          seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
      },

      timeLeft() {
        return TIME_LIMIT - this.timePassed;
      },

      timeFraction() {
        const rawTimeFraction = this.timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
      },

      remainingPathColor() {
        const { alert, warning, info } = COLOR_CODES;
        if (this.timeLeft <= alert.threshold) {

        //
          return  [alert.color, this.timeEnd];
        } else if (this.timeLeft <= warning.threshold) {
          return warning.color;
        } else {
          return info.color;
        }
      }
    },
    watch: {
      timeLeft(newValue) {
        if (newValue === 0) {
          this.onTimesUp();
          this.timeEnd = true;
          this.SET_TIME_END( true);
        }
      }
    },
    mounted() {
      this.startTimer();
    },
    methods: {
    //   ...гетеры писать в computed,
      // ...мутации писать в methods

      ...mapMutations([
          'SET_TIME_END'
      ]),
      onTimesUp() {
        clearInterval(this.timerInterval);
      },

      startTimer() {
        this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
      }
    },

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
    transition: 1.5s linear all
  &-text
    position: absolute
    top: 2px
    left: 0
    width: 100%
    text-align: center
    font-size: 16px
    font-family: $font2
    transition: 1.5s linear all
    &.black
      color: #35373F
      span
        color: #000
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
    min-width: 112px
    .svg-icon
      width: 32px
      height: 32px
      fill: #ADFF00
      margin-right: 10px
</style>
