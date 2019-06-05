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
        name: "Movies",
      data() {
        return {
          loading: true,
          row: '',
          column: '',
        }
      },
      beforeMount() {
        const tokenStr = 'bCT_s0ATF98HruWcM5R0N5ejsiIeKwl9NKTyV880f5k=';
        axios({ method: 'get', url: 'https://lifestylechristianity.impactfactors.net/api/members/admin/1.0/list', headers: { 'X-Custom-Auth': tokenStr } })
          .then(res => {
            this.column = res.data.columns;
            this.row = res.data.data;
            console.log(res)
          })
          .catch(err => console.log(err))
          .finally(() => this.loading = false)
      },
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
