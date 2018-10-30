<template>
    <div class="vHeading">
      <v-header/>
        <div class="content">
          <h2 class="pageTitle">ILLUSTRATION</h2>
          <nav class="pageNav"><ul>
            <li>〜2018 / OLDER</li>
            <li>#ORIGINAL / #FANART</li>
          </ul></nav>
        </div>
    </div>
</template>

<script>
import vHeader from '~/components/header/index.vue'

export default {
  components: {
    vHeader,
  },
}
</script>

<style lang="sass" scoped>
.vHeading
  margin: 50px
  background-size: cover
  background-position: top right
  background-repeat: no-repeat
  background-image: url('/assets/img/index/bg.jpg')
  height: 500px
  position: relative
  
  .content
    margin-left: 10%
    position: absolute
    bottom: 120px
    
    .pageTitle
      font-size: 48px

    .pageNav
      border-left: 1px solid #000
      margin-top: 70px
      padding-left: 50px
      line-height: 2

      ul
        padding: 0

      li
        list-style-type: none
</style>
