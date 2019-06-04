<template>
  <div id="app">
    <div class="header">
      <div class="header-row">
        <div class="header-row__logo">
          Movie Catalog
        </div>
        <div class="header-row__search">
         <Search></Search>
        </div>
        <div class="header-row__user">
          <User></User>
        </div>
      </div>
    </div>
    <Movies></Movies>
    <Pagination></Pagination>
  </div>
</template>

<script>

  import User from './components/User.vue';
  import Search from './components/Search.vue';
  import Movies from './components/Movies.vue';
  import Pagination from './components/Pagination.vue';


  export default {
    name: 'HeaderTemplate',
    components: {
      Search,
      User,
      Movies,
      Pagination,
    },
  };
</script>

<style lang="scss">

@import "../src/assets/scss/core";

.header {
  padding: 0 50px;
  width: 100%;
  height: 40px;
  background: $color-spindle;
    &-row {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      &__logo {
        font-size: 24px;
        font-weight: bold;
      }
      &__search {

      }
      &__user {

      }
    }
}




</style>
