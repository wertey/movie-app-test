<template>
    <div class="pagination">
     <router-link class="pagination__link" tag="a" to="">&laquo;</router-link>
     <router-link class="pagination__link" tag="a" to="/page1">1</router-link>
     <router-link class="pagination__link" tag="a" to="/page2">2</router-link>
     <router-link class="pagination__link" tag="a" to="/page3">3</router-link>
     <router-link class="pagination__link" tag="a" to="/page4">4</router-link>
     <router-link class="pagination__link" tag="a" to="/page5">5</router-link>
     <router-link class="pagination__link" tag="a" to="/page6">6</router-link>
     <router-link class="pagination__link" tag="a" to="/page7">7</router-link>
     <router-link class="pagination__link" tag="a" to="/page8">8</router-link>
     <router-link class="pagination__link" tag="a" to="/page9">9</router-link>
     <router-link class="pagination__link" tag="a" to="/page10">10</router-link>
     <router-link class="pagination__link" tag="a" to="">&raquo;</router-link>
    </div>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped lang="scss">

  @import "../assets/scss/core";

  .pagination {
    font-size: 16px;
    display: flex;
    justify-content: center;
    &__link {
      text-decoration: none;
      color: $color-black;
      padding: 5px;
    }
  }
</style>
