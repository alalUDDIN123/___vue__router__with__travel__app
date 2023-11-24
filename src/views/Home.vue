<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id" :to="{name:'destination-details',params:{id:destination.id,slug:destination.slug}}" class="destination">
        <h2>{{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>

  </div>
</template>

<script>
import sourceData from '../data.json'

export default {
  name: "home-vue",
  data() {
    return {
      destinations: sourceData.destinations
    }
  },
  // mounted() {
  //   console.log(this.destinations);
  // }
}
</script>

<style></style>
