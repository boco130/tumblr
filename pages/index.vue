<template>
  <div class="container">
    <div class="content">
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
.container
  background-size: cover
  background-position: center center
  background-reat: no-repeat
  background-color: #00beb9
  // background-image: url('/assets/img/index/bg.jpg')
  width: 75%
  height: 80vh
  margin-top: 10vh
  display: flex
  align-items: center

  .content
    margin-left: 75%

    @media (max-width: 1800px)
      margin-left: 50%

    .title
      font-family: 'Montserrat', sans-serif
      font-weight: normal
      letter-spacing: .8em
      line-height: 1.5em
      font-size: 72px

    .nav
      font-size: 20px
      font-family: 'Montserrat', sans-serif
      letter-spacing: .8em
      line-height: 2em
      border-left: 1px solid #000
      padding-left: 50px
      margin-top: 50px

      a
        color: inherit
        text-decoration: none
        z-index: 1
        display: inline-block
        margin-bottom: 30px
        padding-bottom: 1px

        &:hover
          padding-bottom: 0
          border-bottom: 1px solid #000

        
        &:last-child
          margin-bottom: 0

    @media (max-width: 1300px)
      .title
        font-size: 36px

      .nav
        font-size: 14px

  @media (max-width: 650px)
    width: 100%
    height: 100vh
    margin: 0

    .content
      margin: 20px

    .nav
      margin-buttom: 0
      
</style>
