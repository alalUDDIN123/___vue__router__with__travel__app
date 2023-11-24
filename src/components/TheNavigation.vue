<template>
  <div id="nav">
    <router-link to="/" id="logo">Vue Router
    </router-link>
    <router-link v-for="destination in destinations" :key="destination.id"
      :to="{ name: 'destination-details', params: { id: destination.id, slug: destination.slug } }">
      <h2>{{ destination.name }} </h2>
    </router-link>

  </div>
</template>
<script>
import sourceData from '../data.json'
export default {
  name: "the-navigation-menu",
  data() {
    return {
      destinations: sourceData.destinations
    }

  }
}
</script>