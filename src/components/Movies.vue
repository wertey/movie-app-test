<template>
    <div class="movies">
      <div class="movies__result">
        You searched for: Batman, 338 results found
      </div>
      <div class="movies-row">
        <div class="movies-row__block">
          <img class="movies-row__block-img" src="../assets/images/img.png" alt="">
          <div class="movies-row__block-text">Name: Batman</div>
          <div class="movies-row__block-text">Year: 1996</div>
          <div class="movies-row__block-text">imbdID: 2387hg8</div>
          <div class="movies-row__block-text">Type: movie</div>
        </div>
        <div class="movies-row__block">
          <img class="movies-row__block-img" src="../assets/images/img.png" alt="">
          <div class="movies-row__block-text">Name: Batman</div>
          <div class="movies-row__block-text">Year: 1996</div>
          <div class="movies-row__block-text">imbdID: 2387hg8</div>
          <div class="movies-row__block-text">Type: movie</div>
        </div>
        <div class="movies-row__block">
          <img class="movies-row__block-img" src="../assets/images/img.png" alt="">
          <div class="movies-row__block-text">Name: Batman</div>
          <div class="movies-row__block-text">Year: 1996</div>
          <div class="movies-row__block-text">imbdID: 2387hg8</div>
          <div class="movies-row__block-text">Type: movie</div>
        </div>
        <div class="movies-row__block">
          <img class="movies-row__block-img" src="../assets/images/img.png" alt="">
          <div class="movies-row__block-text">Name: Batman</div>
          <div class="movies-row__block-text">Year: 1996</div>
          <div class="movies-row__block-text">imbdID: 2387hg8</div>
          <div class="movies-row__block-text">Type: movie</div>
        </div>



      </div>
    </div>
</template>

<script>
    export default {
        name: "Movies"
    }
</script>

<style scoped lang="scss">

  @import "../assets/scss/core";

  .movies {
    padding: 25px 50px 0;
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
      }
    }
  }
</style>
