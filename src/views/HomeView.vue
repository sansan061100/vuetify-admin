<template>
  <div>
    <v-data-table-server
      :headers="headers"
      :items="desserts"
      :items-length="totalDesserts"
      :loading="loading"
      :items-per-page="2"
      item-value="name"
      show-select
      show-expand
      class="elevation-1"
      @update:options="options = $event"
    >
      <template v-slot:expanded-row> This is an expanded row </template>
    </v-data-table-server>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [
        { title: "User Id", key: "userId" },
        { title: "Id", key: "id" },
        { title: "Title", key: "title" },
        { title: "Body", key: "body" },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    getDataFromApi() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _limit: this.options.itemsPerPage,
            _page: this.options.page,
          },
        })
        .then((response) => {
          this.desserts = response.data;
          this.totalDesserts = 100;
          this.loading = false;
        });
    },
  },
};
</script>
