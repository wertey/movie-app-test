<template>
    <div class="search">
      <input class="search__input" placeholder="Search by Title" type="search" v-model="searching" @keyup.enter="filtered">
    </div>
</template>

<script>

  import axios from 'axios';

    export default {
        name: "Search",
      data() {
         return {
           searching: '',
           info: '',
         }
      },
      computed: {
        filtered() {
          console.log(this.info)
          console.log(this.searching)
            return  this.info.filter((movie) => {
            return movie.Title.match(this.searching);
          })
        },
      },
      beforeMount() {
        axios
          .get('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2')
          .then(response => {
            this.info = response.data.Search;
          })
          .catch(err => console.log(err));
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
        @media screen and (max-width: 800px) {
          & {
            max-width: 500px;
          }
        }
        @media screen and (max-width: 800px) {
          & {
            max-width: 500px;
          }
        }
        @media screen and (max-width: 510px) {
          & {
            max-width: 300px;
          }
        }
      }
    }

</style>
