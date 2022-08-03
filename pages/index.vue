<template>
  <div>
    {{ $store.state.movies.counter }}
    <div>
      <button
        @click="$store.commit('movies/increment')"
        class="
          p-5
          bg-blue-700
          flex
          justify-center
          items-center
          rounded
          text-white
        "
      >
        Counter++
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    console.log(this.$store.state.counter);
  },
};
</script>
