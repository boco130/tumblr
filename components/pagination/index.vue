<template>
  <ul class="vPagination">
    <div
      v-if="currentPage > 1"
      class="pageFeeding">
      <li class="pageItem">
        <nuxt-link class="pageLink" :to="{ query : { page: 1 }}">
          <svg width="20px" height="20px" viewBox="0 0 50 50">
            <g transform="translate(1209.551 3295.59) rotate(180)">
              <polygon points="1167.19,3245.59 1192.19,3270.59 1167.19,3295.59 1164.57,3292.97 1186.96,3270.59 1164.57,3248.21"/>
              <polygon points="1179.53,3245.59 1204.53,3270.59 1179.53,3295.59 1176.91,3292.97 1199.29,3270.59 1176.91,3248.21"/>
            </g>
          </svg>
        </nuxt-link>
      </li>
      <li class="pageItem">
        <nuxt-link class="pageLink" :to="{ query : { page: currentPage - 1 }}">
          <svg width="20px" height="20px" viewBox="0 0 50 50">
            <polygon points="36.19,50 11.19,25 36.19,0 38.81,2.62 16.43,25 38.81,47.38"/>
          </svg>
        </nuxt-link>
      </li>
    </div>
    <div class="pagination">
      <li
        v-for="page in paginationNumber(currentPage, totalPages, displayCount)"
        v-bind:key="page"
        :class="`pageItem`">
        <nuxt-link
          :to="{ query : { page: page }}"
          class="pageLink">{{ page }}</nuxt-link>
      </li>
    </div>
    <div
      v-if="totalPages - currentPage > 1"
      class="pageFeeding">
      <li class="pageItem">
        <nuxt-link
          class="pageLink" :to="{ query : { page: currentPage + 1 }}">
          <svg width="20px" height="20px" viewBox="0 0 50 50">
            <polygon points="13.81,0 38.81,25 13.81,50 11.19,47.38 33.57,25 11.19,2.62"/>
          </svg>
        </nuxt-link>
      </li>
      <li class="pageItem">
        <nuxt-link class="pageLink" :to="{ query : { page: totalPages }}">
          <svg width="20px" height="20px" viewBox="0 0 50 50">
            <g transform="translate(1209.551 3295.59) rotate(180)">
              <polygon points="1201.91,3295.59 1176.91,3270.59 1201.91,3245.59 1204.53,3248.21 1182.15,3270.59 1204.53,3292.97"/>
              <polygon points="1189.57,3295.59 1164.57,3270.59 1189.57,3245.59 1192.19,3248.21 1169.81,3270.59 1192.19,3292.97"/>
            </g>
          </svg>
        </nuxt-link>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    displayCount: {
      type: Number,
      default: 5,
      validator(value) {
        return value % 2 !== 0;
      },
    },
  },
  methods: {
    paginationNumber(currentPage, totalPages, displayCount) {
      const offset = Math.ceil(displayCount / 2);
      let paginationAry = [];
      if(totalPages < displayCount) {
        displayCount = totalPages;
      }
      for (var i = 1; i <= displayCount; i++) {
        if (currentPage <= offset) {
          paginationAry.push(i);
        } else if (offset < currentPage && currentPage < (totalPages - 2)) {
          paginationAry.push(i + currentPage - offset);
        } else {
          paginationAry.push(totalPages - displayCount + i);
        }
      }
      return paginationAry;
    }
  },
};
</script>

<style lang="sass" scoped>
.vPagination
  text-align: center
  padding: 0
  font-size: 20px

  .pagination,
  .pageFeeding
    display: inline

  .pagination
    margin: 0 80px

  .pageItem
    display: inline
    list-style-type: none

    .pageLink
      margin: 0 25px
      text-decoration: none
      color: #000

    .nuxt-link-exact-active 
      font-weight: bold
      border-bottom: 2px solid #000

  @media (max-width: 860px)
    font-size: 14px

    .pagination
      margin: 0 40px

    .pageItem
      svg
        width: 1em
        height: 1em

      .pageLink
        margin: 0 10px
</style>
