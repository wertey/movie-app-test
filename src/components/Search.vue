<template>
    <div class="search">
      <input class="search__input" placeholder="Enter you words" type="search" v-model="search">
    </div>
</template>

<script>
    export default {
        name: "Search",
      data() {
         return {
           search: '',
         }
      }
    }
</script>

<style scoped lang="scss">

    .search {
      &__input {
        width: 780px;
        height: 30px;
        border: none;
        padding-left: 10px;
        font-size: 18px;
      }
    }

</style>
