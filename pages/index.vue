<template>
  <div class="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="col-span-1" v-for="i in 12" :key="i">
      <img
        class="w-full h-40 object-cover"
        :src="`https://picsum.photos/400/5${i}`"
        alt=""
      />
    </div>
    <div class="col-span-full xl:col-span-1">
      <img
        class="w-full h-40 object-cover"
        :src="`https://picsum.photos/400/500`"
        alt=""
      />
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
