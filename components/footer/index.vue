<template>
  <footer class="vFooter">
    <p>Copyright © 2018 totorika ALL RIGHTS RESERVED.</p>
  </footer>
</template>

<script>
export default {
  data: function () {
      return {
        isHambMenuDisplay: false,
      };
  },
}
</script>

<style lang="sass" scoped>
.vFooter
  text-align: center
  margin: 200px 0 30px 0
  font-size: 10px

  @media (max-width: 860px)
    margin-top: 100px
</style>
