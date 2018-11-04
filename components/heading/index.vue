<template>
    <div class="vHeading">
      <v-header/>
        <div class="content">
          <h2 class="pageTitle">{{ pageTitle }}</h2>
          <!-- <nav class="pageNav"><ul>
            <li>〜2018 / OLDER</li>
            <li>#ORIGINAL / #FANART</li>
          </ul></nav> -->
        </div>
    </div>
</template>

<script>
import vHeader from '~/components/header/index.vue'

export default {
  components: {
    vHeader,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  }
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

  @media (max-width: 1210px)
    height: 300px

    .content
      bottom: 50px
      margin-left: 50px

      .pageTitle
        font-size: 38px

      .pageNav
        margin-top: 20px

  @media (max-width: 860px)
    height: 200px
    margin: 20px

    .content
      bottom: 20px
      margin-left: 20px

      .pageTitle
        font-size: 20px

      .pageNav
        margin-top: 18px
        padding-left: 18px
        font-size: 12px
</style>
