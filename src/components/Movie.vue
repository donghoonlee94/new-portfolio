<template>
  <div>
    <h1>API Get Test</h1>
    <button @click="getMovies">스킬 겟</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ACTIONS_SKILS } from "../store/modules/skil";

export default {
  methods: {
    ...mapActions("skils", {
      getSkils: ACTIONS_SKILS.GET_SKILS,
    }),
    getMovies() {
      this.getSkils();
    },
  },
};
</script>

<style>
</style>