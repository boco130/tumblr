<template>
  <div class="vPagination">
    {{ pagination }}
    <ul v-if="currentPage < 4" class="pagination">
      <li
        v-for="page in 5"
        v-bind:key="page"
        :class="`pageItem`">
        <nuxt-link
          :to="{ query : { page: page }}"
          class="pageLink">{{ page }}</nuxt-link>
      </li>
      1
    </ul>
    <ul v-else-if="3 < currentPage && currentPage < (totalPages - 2)" class="pagination">
      <li
        v-for="page in 5"
        v-bind:key="page + currentPage"
        :class="`pageItem`">
        <nuxt-link
          :to="{ query : { page: `page + currentPage` }}"
          class="pageLink">{{ `page + currentPage` }}</nuxt-link>
      </li>
    </ul>
    <ul v-else-if="currentPage > (totalPages - 2)" class="pagination">
      <!-- <li
        v-for="page in 10"
        v-bind:key="page"
        :class="`pageItem`">
        <nuxt-link
          :to="{ query : { page: page }}"
          class="pageLink">{{ page }}</nuxt-link>
      </li> -->
      3
    </ul>
  </div>
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
</style>
