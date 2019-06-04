<template>
    <div class="pagination">
      <a class="pagination__link" href="#">&laquo;</a>
      <a class="pagination__link" href="#">1</a>
      <a class="pagination__link" href="#">2</a>
      <a class="pagination__link" href="#">3</a>
      <a class="pagination__link" href="#">4</a>
      <a class="pagination__link" href="#">5</a>
      <a class="pagination__link" href="#">6</a>
      <a class="pagination__link" href="#">7</a>
      <a class="pagination__link" href="#">8</a>
      <a class="pagination__link" href="#">9</a>
      <a class="pagination__link" href="#">10</a>
      <a class="pagination__link" href="#">&raquo;</a>
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
