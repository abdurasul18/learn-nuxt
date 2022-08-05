<template>
  <nav class=" ">
    <ul class="flex items-center justify-center">
      <li class="mx-4 text-xl text-blue-700">
        <nuxt-link to="/"> Home </nuxt-link>
      </li>
       <li class="mx-4 text-xl text-blue-700">
        <nuxt-link to="/food"> Food </nuxt-link>
      </li>
      <li class="mx-4 text-xl text-blue-700">
        <nuxt-link to="/contact"> Contact </nuxt-link>
      </li>
      <li class="mx-4 text-xl text-blue-700">
        <nuxt-link to="/about"> About </nuxt-link>
      </li>
       <li class="mx-4 text-xl text-blue-700">
        <nuxt-link to="/login"> Login </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods :{
   
  },
  mounted(){
  }
};
</script>

<style>
nav {
  @apply flex items-center p-5 shadow;
}
</style>