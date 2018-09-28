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
  asyncData ({}) {
    let domain = process.env.API_URL
    let apikey = process.env.API_KEY
    var url = 'http://api.tumblr.com/v2/blog/' + domain + '/posts?api_key=' + apikey 
    return axios.get(url)
      .then((res) => {
        return { tumblrData: res.data.response.posts }
      })
  }
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
}
</style>
