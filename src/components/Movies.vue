<template>
    <div class="movies">
      <div class="movies__result">
        You searched for: Batman, {{this.founded}} results found
      </div>
      <div class="movies-row">
        <div class="movies-row__block" v-for="(movie,index) in info" :key="index">
          <img class="movies-row__block-img" src="../assets/images/img.png" alt="">
          <div class="movies-row__block-text">Name: {{movie.Title}}</div>
          <div class="movies-row__block-text">Year: {{movie.Year}}</div>
          <div class="movies-row__block-text">imbdID: {{movie.imdbID}}</div>
          <div class="movies-row__block-text">Type: {{movie.Type}}</div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: "Movies",
      data() {
          return {
            info: '',
            founded: 0
          }
      },
      beforeMount() {
        axios
          .get('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2')
          .then(response => {
            this.info = response.data.Search;
            console.log(this.info)
          })
          .catch(err => console.log(err))
          .finally(() => (this.loading = false));
        }
}
</script>

<style scoped lang="scss">

  @import "../assets/scss/core";

  .movies {
    padding: 25px 50px 0;
    @media screen and (max-width: 510px) {
        & {
          padding: 10px 10px 0;
        }
    }
      &__result {
        font-weight: bold;
        font-size: 20px;
      }
    &-row {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      &__block {
        flex: 1 1;
        text-align: center;
        padding-bottom: 20px;
        &-text {
          margin-top: 10px;
        }
        &-img {
          @media screen and (max-width: 360px) {
            & {
              max-width: 300px;
            }
          }
        }
      }
    }
  }
</style>
