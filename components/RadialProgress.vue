<!-- using circle progress bar from https://github.com/wyzantinc/vue-radial-progress -->

<template>
  <div class="radial-progress-container" :style="containerStyle">
    <div class="radial-progress-inner" :style="innerCircleStyle">
      <slot>
        <h2 id="observer-tag-id">{{ completedSteps }}%</h2>
      </slot>
    </div>
    <svg class="radial-progress-bar"
         :width="diameter"
         :height="diameter"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient :id="'radial-gradient' + _uid"
                        :fx="gradient.fx"
                        :fy="gradient.fy"
                        :cx="gradient.cx"
                        :cy="gradient.cy"
                        :r="gradient.r">
          <stop offset="30%" :stop-color="startColor"/>
          <stop offset="100%" :stop-color="stopColor"/>
        </radialGradient>
      </defs>
      <circle :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              fill="transparent"
              :stroke="innerStrokeColor"
              :stroke-dasharray="circumference"
              stroke-dashoffset="0"
              :stroke-linecap="strokeLinecap"
              :style="strokeStyle"></circle>
      <circle :transform="'rotate(270, ' + radius + ',' + radius + ')'"
              :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              fill="transparent"
              :stroke="'url(#radial-gradient' + _uid + ')'"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference"
              :stroke-linecap="strokeLinecap"
              :style="progressStyle"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    diameter: {
      type: Number,
      required: false,
      default: 200
    },
    totalSteps: {
      type: Number,
      required: true,
      default: 10
    },
    // completedSteps: {
    //   type: Number,
    //   required: true,
    //   default: 0
    // },
    startColor: {
      type: String,
      required: false,
      default: '#ff675f'
    },
    stopColor: {
      type: String,
      required: false,
      default: '#ff675f'
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 15
    },
    innerStrokeWidth: {
      type: Number,
      required: false,
      default: 15
    },
    strokeLinecap: {
      type: String,
      required: false,
      default: 'round'
    },
    animateSpeed: {
      type: Number,
      required: false,
      default: 1000
    },
    innerStrokeColor: {
      type: String,
      required: false,
      default: '#e1e1e3'
    },
    fps: {
      type: Number,
      required: false,
      default: 60
    },
    timingFunc: {
      type: String,
      required: false,
      default: 'linear'
    },
    isClockwise: {
      type: Boolean,
      required: false,
      default: true
    },
    fillTimeOut: {
        type: Number,
        required: false,
        default: 20
    },
    toComplete: {
        type: Number,
        required: false,
        default: 0
    }
    // ,
    // nameId: {
    //     type: String,
    //     required: true
    // }
    // ,
    // startFiling: {
    //     type: Boolean,
    //     required: false,
    //     default: false
    // }
  },
  data () {
    return {
        startFiling: false,
        completedSteps: 0,
        gradient: {
            fx: 0.99,
            fy: 0.5,
            cx: 0.5,
            cy: 0.5,
            r: 0.65
        },
      gradientAnimation: null,
      currentAngle: 0,
      strokeDashoffset: 0
    }
  },
  computed: {
    radius () {
      return this.diameter / 2
    },
    circumference () {
      return Math.PI * this.innerCircleDiameter
    },
    stepSize () {
      if (this.totalSteps === 0) {
        return 0
      }
      return 100 / this.totalSteps
    },
    finishedPercentage () {
      return this.stepSize * this.completedSteps
    },
    circleSlice () {
      return 2 * Math.PI / this.totalSteps
    },
    animateSlice () {
      return this.circleSlice / this.totalPoints
    },
    innerCircleDiameter () {
      return this.diameter - (this.innerStrokeWidth * 2)
    },
    innerCircleRadius () {
      return this.innerCircleDiameter / 2
    },
    totalPoints () {
      return this.animateSpeed / this.animationIncrements
    },
    animationIncrements () {
      return 1000 / this.fps
    },
    hasGradient () {
      return this.startColor !== this.stopColor
    },
    containerStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`
      }
    },
    progressStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: `stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`
      }
    },
    strokeStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.innerStrokeWidth}px`
      }
    },
    innerCircleStyle () {
      return {
        width: `${this.innerCircleDiameter}px`
      }
    },
  },
  mounted: function() {
    let el = this.$el.querySelector('#observer-tag-id')
    if (
        process.client &&
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window && 
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ){
        this.handleObservers(el)
    }
  },
  methods: {
    handleObservers(el) {
        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) 
                this.startFiling = true
        }).observe(el)
    },
    getStopPointsOfCircle (steps) {
      const points = []
      for (let i = 0; i < steps; i++) {
        const angle = this.circleSlice * i
        points.push(this.getPointOfCircle(angle))
      }
      return points
    },
    getPointOfCircle (angle) {
      const radius = 0.5
      const x = radius + (radius * Math.cos(angle))
      const y = radius + (radius * Math.sin(angle))
      return { x, y }
    },
    gotoPoint () {
      const point = this.getPointOfCircle(this.currentAngle)
      if (point.x && point.y) {
        this.gradient.fx = point.x
        this.gradient.fy = point.y
      }
    },
    direction () {
      if (this.isClockwise) {
        return 1
      }
      return -1
    },
    changeProgress ({ isAnimate = true }) {
      this.strokeDashoffset = ((100 - this.finishedPercentage) / 100) * this.circumference * this.direction()
      if (this.gradientAnimation) {
        clearInterval(this.gradientAnimation)
      }
      if (!isAnimate) {
        this.gotoNextStep()
        return
      }
      const angleOffset = (this.completedSteps - 1) * this.circleSlice
      let i = (this.currentAngle - angleOffset) / this.animateSlice
      const incrementer = Math.abs(i - this.totalPoints) / this.totalPoints
      const isMoveForward = i < this.totalPoints
      this.gradientAnimation = setInterval(() => {
        if (isMoveForward && i >= this.totalPoints ||
            !isMoveForward && i < this.totalPoints) {
          clearInterval(this.gradientAnimation)
          return
        }
        this.currentAngle = angleOffset + (this.animateSlice * i)
        this.gotoPoint()
        i += isMoveForward ? incrementer : -incrementer
      }, this.animationIncrements)
    },
    gotoNextStep () {
      this.currentAngle = this.completedSteps * this.circleSlice
      this.gotoPoint()
    },
    handleRadialAnimation() {
        setTimeout(() => {
            if (this.completedSteps < this.toComplete) {
                this.completedSteps += 1
                this.handleRadialAnimation()
            }
        }, 10)
    }
  },
  watch: {
    startFiling (val) {
        if (val)
            this.handleRadialAnimation()
    },
    totalSteps () {
      this.changeProgress({ isAnimate: true })
    },
    completedSteps () {
      this.changeProgress({ isAnimate: true })
    },
    diameter () {
      this.changeProgress({ isAnimate: true })
    },
    strokeWidth () {
      this.changeProgress({ isAnimate: true })
    }
  },
  created () {
    this.changeProgress({ isAnimate: true })
  }
}
</script>

<style>
.radial-progress-container {
    position: relative;
    width: 100%;
    top:0;right: 0;bottom: 0;left: 0;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.radial-progress-inner {
    width: 100%;
    top: 0; right: 0; bottom: 0; left: 0;
    position: absolute;
    border-radius: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>