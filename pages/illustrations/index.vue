<template>
<div class="illust">
  <ul class="illustList">
    <li
      v-for="tumblrData in tumblrData"
      v-bind:key="tumblrData.id"
      class="illustItem">
      <img 
        :src = tumblrData.photos[0].alt_sizes[2].url
        :width = tumblrData.photos[0].alt_sizes[2].width
        :height = tumblrData.photos[0].alt_sizes[2].height>
    </li>
  </ul>
  <v-pagination
    :currentPage = "$route.query.page"
    :totalPages = "totalPages"/>
</div>
</template>

<script>
import axios from 'axios'
import vPagination from '~/components/pagination/index.vue'

export default {
  components: {
    vPagination,
  },
  data () {
    tumblrData: new Array;
  },
  watchQuery: ['page'],
  asyncData ({ query }) {
    let domain = process.env.API_URL
    let apikey = process.env.API_KEY
    let category = 'photo'
    let offset = ( query.page - 1 ) * 20
    let url = 'http://api.tumblr.com/v2/blog/' + domain + '/posts/' + category + '?api_key=' + apikey + '&offset=' + offset
    return axios.get(url)
      .then((res) => {
        return {
          tumblrData: res.data.response.posts,
          totalPosts: res.data.response.total_posts,
          totalPages: Math.ceil( res.data.response.total_posts / 20 ),
        }
      })
  },
}
</script>

<style lang="sass" scoped>
.illust
  width: 100%

  .illustList
    list-style-type: none
    display: flex
    flex-wrap: wrap
    margin: 0 auto
    padding: 0
    max-width: 1110px

    .illustItem
      margin: 0 30px 30px 0

      &:nth-child(3n)
        margin-right: 0
    
      img
        width: 350px
        height: 350px
        object-fit: cover

  @media (max-width: 1210px)
    .illustList
      max-width: 760px

      .illustItem
        &:nth-child(3n)
          margin-right: 30px
        &:nth-child(2n)
          margin-right: 0

  @media (max-width: 860px)
    .illustList
      width: 100%
      max-width: none
      padding: 0 50px

      .illustItem
        width: calc((100% - 30px) / 2 )
        position: relative

        &::before
          padding-top: 100%
          content: "ねこ"
          display: block

        img
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0


</style>
