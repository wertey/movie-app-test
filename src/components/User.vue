<template>
    <div class="user">
      <div class="user__fullname">
        Dmitry Verteyko
      </div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped lang="scss">

  @import "../assets/scss/core";

  .user {
    &__fullname {
      position: relative;
      display: flex;
      justify-content: flex-start;
      &:after {
        position: absolute;
        content: '';
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid $color-black;
        right: -15px;
        top: 8px;
      }
      &:before {
        position: absolute;
        content: '';
        left: -27px;
        top: -4px;
        width: 20px;
        height: 24px;
        background-image: url(../assets/images/icon.png);
      }
    }
  }
</style>
