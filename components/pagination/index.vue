<template>
  <ul class="vPagination">
    <div
      v-if="currentPage > 1"
      class="pageFeeding">
      <li class="pageItem">
        <nuxt-link class="pageLink" :to="{ query : { page: 1 }}">＜＜</nuxt-link>
      </li>
      <li class="pageItem">
        <nuxt-link class="pageLink" :to="{ query : { page: currentPage - 1 }}">＜</nuxt-link>
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
          class="pageLink" :to="{ query : { page: currentPage + 1 }}">＞</nuxt-link>
      </li>
      <li class="pageItem">
        <nuxt-link class="pageLink" :to="{ query : { page: totalPages }}">＞＞</nuxt-link>
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

<style lang="scss" scoped>
.vPagination {
  text-align: center;

  .pagination,
  .pageFeeding {
    display: inline;
  }
  .pageItem {
    display: inline;
    list-style-type: none;

    .pageLink {
      padding: 0 1em;
      margin: 0 10px;
      text-decoration: none;
      color: #000;
    }
    .nuxt-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
