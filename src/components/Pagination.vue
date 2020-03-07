<template>
  <div class="pagination">
    <div class="col-sm-12">
      <div class="offset">
        <nav aria-label="Page navigation example">
          <div class="movies-row__block" v-for="(movie, index) in displayedPosts" :key="index">
            <img class="movies-row__block-img" src="../assets/images/img.png" alt="" />
            <div class="movies-row__block-text">Name: {{ movie.Title }}</div>
            <div class="movies-row__block-text">Year: {{ movie.Year }}</div>
            <div class="movies-row__block-text">imbdID: {{ movie.imdbID }}</div>
            <div class="movies-row__block-text">Type: {{ movie.Type }}</div>
          </div>
          <ul class="pagination">
            <li class="page-item">
              <button type="button" class="page-link" v-if="page != 1" @click="page--">
                Previous
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link"
                v-for="pageNumber in pages.slice(page - 1, page + 5)"
                @click="page = pageNumber"
                :class="{'page-link_active': page === pageNumber}"
              >
                {{ pageNumber }}
              </button>
            </li>
            <li class="page-item">
              <button type="button" @click="page++" v-if="page < pages.length" class="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Pagination',
    data() {
      return {
        posts: [],
        page: 1,
        perPage: 2,
        pages: [],
      };
    },
    methods: {
      setPages() {
        const numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      paginate(posts) {
        const { page } = this;
        const { perPage } = this;
        const from = page * perPage - perPage;
        const to = page * perPage;
        return posts.slice(from, to);
      },
    },
    computed: {
      displayedPosts() {
        return this.paginate(this.posts);
      },
    },
    watch: {
      posts() {
        this.setPages();
      },
    },
    filters: {
      trimWords(value) {
        return (
          `${value
            .split(' ')
            .splice(0, 20)
            .join(' ')}...`
        );
      },
    },
    beforeMount() {
      axios
        .get('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2')
        .then((response) => {
          this.posts = response.data.Search;
        })
        .catch(err => console.log(err));
    },
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/core";

  .pagination {
    font-size: 16px;
    display: flex;
    justify-content: center;
  }

  .page-link {
    text-decoration: none;
    color: $color-black;
    padding: 5px;
    border: 1px solid black;
    &_active {
      background: red;
    }
  }

</style>
