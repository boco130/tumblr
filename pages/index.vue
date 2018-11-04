<template>
  <div class="container">
    <div class="content">
      <h1 class="title">
        TOTORIKA<br>
        ART WORKS
      </h1>
      <ul class="nav">
        <li><router-link to="/illustrations" class="nav_button">ILLUSTRATIONS</router-link></li>
        <li><router-link to="/events" class="nav_button">EVENTS</router-link></li>
        <li><router-link to="/goods" class="nav_button">GOODS</router-link></li>
        <li><router-link to="/contact" class="nav_button">CONTACT</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'top',
  components: {
  }
}
</script>

<style lang="sass" scoped>
body
  position: relative

.container
  background-size: cover
  background-position: top right
  background-repeat: no-repeat
  background-image: url('/assets/img/index/bg.jpg')
  width: 75%
  height: 80vh
  margin-top: 10vh

  @media (min-width: 651px)
    display: flex
    align-items: center

  .content
    position: absolute
    transform: translateY(-50%)
    top: 50%
    right: 10vh

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
      list-style-type: none

      li
        margin-bottom: 10px

        &:last-child
          margin-bottom: 0

      a
        color: inherit
        text-decoration: none
        z-index: 1
        display: inline-block
        padding-bottom: 1px

        &:hover
          padding-bottom: 0
          border-bottom: 1px solid #000

    @media (max-width: 1300px)
      .title
        font-size: 36px

      .nav
        font-size: 14px

@media (max-width: 650px)
  .container
    width: 100%
    height: 100vh
    margin: 0

    .content
      position: static
      transform: none
      top: auto
      padding: 20px
      
      .title
        font-size: 8vw
        font-weight: bold

      .nav
        position: absolute
        bottom: 20px
        padding-left: 20px
        letter-spacing: .5em
</style>
