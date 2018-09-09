<template>
    <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.container
  background-size: cover
  background-image: url('/assets/img/index/bg.jpg')
  width: 100%
  height: 100vh
  padding: 10%
  position: relative

  .title
    font-size: 72px
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
    line-height: 5em
    position: absolute
    bottom: 30%

    a
      color: inherit
      text-decoration: none
</style>
