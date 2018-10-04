<template>
  <ul class="vPagination">
    <li class="pageItem">
      <nuxt-link class="pageLink" :to="{ query : { page: 1 }}">
        ＜＜
      </nuxt-link>
    </li>
    <li class="pageItem">
      <nuxt-link class="pageLink" :to="currentPage > 1 ? { query : { page: currentPage - 1 }} : false">
        ＜
      </nuxt-link>
    </li>
    <div v-if="currentPage < 4" class="pagination">
      <li
        v-for="page in 5"
        v-bind:key="page"
        :class="`pageItem`">
        <nuxt-link
          :to="{ query : { page: page }}"
          class="pageLink">{{ page }}</nuxt-link>
      </li>
    </div>
    <div v-else-if="3 < currentPage && currentPage < (totalPages - 2)" class="pagination">
      <li
        v-for="page in 5"
        v-bind:key="page + currentPage"
        :class="`pageItem`">
        <nuxt-link
          :to="{ query : { page: currentPage - 3 + page  }}"
          class="pageLink">{{ currentPage - 3 + page }}</nuxt-link>
      </li>
    </div>
    <div v-else-if="currentPage = (totalPages - 1)" class="pagination">
      <li
        v-for="page in 5"
        v-bind:key="page + currentPage"
        class="pageItem">
        <nuxt-link
          :to="{ query : { page: totalPages - 5 + page  }}"
          class="pageLink">{{ totalPages - 5 + page }}</nuxt-link>
      </li>
    </div>
    <li class="pageItem">
      <nuxt-link
        class="pageLink" :to="totalPages - currentPage > 1 ? { query : { page: currentPage + 1 }} : false">
        ＞
      </nuxt-link>
    </li>
    <li class="pageItem">
      <nuxt-link class="pageLink" :to="{ query : { page: totalPages }}">
        ＞＞
      </nuxt-link>
    </li>
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
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.vPagination {
  text-align: center;

  .pagination {
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
