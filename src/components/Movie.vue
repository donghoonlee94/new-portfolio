<template>
  <div>
    <h1>API Get Test</h1>
    <button @click="getMovies">무비 겟</button>
    <button>특정 무비 겟</button>
  </div>
</template>

<script>
import { getMovies } from "../api/movies-service";
import { apiFunc } from "../utils/util";

export default {
  data: () => ({
    movie: [],
  }),
  methods: {
    async getMovies() {
      const req = await apiFunc(getMovies);
      console.log(req);
    },
  },
  created() {
    console.log(process.env);
  },
};
</script>

<style>
</style>