<template>
  <div id="app">
    <div class="header">
      <div class="header-row">
        <div class="header-row__logo">
          <router-link class="header-row__logo-link" to="/">Movie Catalog</router-link>
        </div>
        <div class="header-row__search">
         <Search></Search>
        </div>
        <div class="header-row__user">
          <User></User>
        </div>
      </div>
    </div>
    <router-view/>
    <Pagination></Pagination>

  </div>
</template>

<script>

import User from './components/User.vue';
import Search from './components/Search.vue';
import Pagination from './components/Pagination.vue';


export default {
    name: 'App',
    components: {
      Search,
      User,
      Pagination,
    },
    data() {
      return {
        loading: true,
      }
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
    @media screen and (max-width: 1260px) {
      & {
        height: 120px;
        padding-top: 10px;
      }
  }
  @media screen and (max-width: 510px) {
    & {
      padding: 10px;
    }
  }
    &-row {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
        @media screen and (max-width: 1260px) {
          & {
            flex-direction: column;
            &__user {
              height: 30px;
            }
          }
      }
      &__logo {
        font-size: 24px;
        font-weight: bold;
        &-link {
          text-decoration: none;
          color: $color-black;
        }
      }
    }
}
</style>
