<template>
  <div>
    <swiper :options="options">
      <swiper-slide v-for="place in places" :key="place.id">
        <img v-if="place.picture" :src="place.picture.src" alt="" />
      </swiper-slide>
    </swiper>
    <pre>
      {{ places }}
    </pre>
    <!-- <div class="text-3xl">Loading</div> -->
  </div>
</template>

<script>
export default {
  // middleware : [''],
  data() {
    return {
      options: {
        slidesPerView: 5,
      },
    };
  },
  async fetch(context) {
    // this.places = (
    //   await this.$axios.get(
    //     `https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600`
    //   )
    // ).data.places;
  },
  async asyncData({ store, params, $axios, $hi }) {
    let places = (
      await $axios.get(
        `https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600`
      )
    ).data.places;
    return {
      places,
    };
  },
  mounted() {
  },
};
</script>

<style>
</style>