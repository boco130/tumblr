<template>
<div class="illust">
  <div class="headig">
    <h1>illustlations</h1>
  </div>
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
  <ul class="pagination">
    <li
      v-for="page in totalPages"
      v-bind:key="page"
      :class="`pageItem`">
      <nuxt-link
        :to="{ query : { page: page }}"
        class="pageLink">{{ page }}</nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios'

export default {
  components: {
    AppLogo,
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
          totalPages: Math.ceil( res.data.response.total_posts / 20 ) + 1
        }
      })
  },
}
</script>

<style lang="scss" scoped>
.illust {
  width: 100%;

  .illustList {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
    width: 1640px;

    .illustItem {
      padding: 0 10px 10px 0;

      &:nth-child(3n) {
        padding-right: 0;
      }
      img {
        width: 540px;
        height: 540px;
        object-fit: cover;
      }
    }
  }
  .pagination {
    text-align: center;
    .pageItem {
      display: inline;
      list-style-type: none;

      .pageLink {
        display: inline-block;
        padding: 1em;
        border: 1px solid #969696;
        margin: 0 10px;
        text-decoration: none;
      }
      .nuxt-link-exact-active {
          background-color: #969696;
          color: #fff;
      }
    }
  }
}
</style>
