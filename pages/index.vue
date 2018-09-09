<template>
  <div class="container">
    <h1 class="title">
      TOTORIKA<br>
      ART WORKS
    </h1>
    <div class="nav">
      <a href="http://trkttrk.tumblr.com/" target="_blank" class="nav_button">ILLUSTRATIONS</a><br>
      <router-link to="/event" class="nav_button">EVENT INFO</router-link><br>
      <router-link to="/contact" class="nav_button">CONTACT</router-link>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="sass" scoped>
@media (max-width: 1024px)
  .container
    .title
        font-size: 7vw
@media (min-width: 1025px)
  .container
    .title
        font-size: 72px

.container
  background-size: cover
  background-position: center center
  background-reat: no-repeat
  background-image: url('/assets/img/index/bg.jpg')
  width: 100%
  height: 100vh
  padding: 10%
  // position: relative

  .title
    font-family: 'Montserrat', sans-serif
    color: #fff
    letter-spacing: .8em
    line-height: 1.5em

  .nav 
    font-size: 16px
    font-family: 'Montserrat', sans-serif
    font-style: italic
    color: #fff
    letter-spacing: .8em
    line-height: 3em
    position: absolute
    bottom: 30%

    a
      color: inherit
      text-decoration: none
      z-index: 1
      position: relative
      display: block

      &::before
        background-color: #a0ddd8
        position: absolute
        left: -10px
        content: ""
        z-index: -1
        display: inline-block
        width: 0
        height: 1em
        transform: translateY(-50%)
        top: 60%
        transition-duration: .8s

      &:hover
        &::before
          background-color: #e2aeae
          width: 300px
</style>
