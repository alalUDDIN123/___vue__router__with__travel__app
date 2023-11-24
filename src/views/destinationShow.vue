<template>
  <div class="destination-details">
    <!-- Show loading message while data is being fetched -->
    <div v-if="loading" class="loading-message">
      Loading...
    </div>

    <!-- Show destination details once data is loaded -->
    <div v-else>
      <div v-if="destinationDetails">
        <div class="destination-detail-name">
          <h2>{{ destinationDetails.name }}</h2>
        </div>
        <div class="destination-details-content">
          <img :src="`/images/${destinationDetails.image}`" :alt="destinationDetails.name">
          <p>{{ destinationDetails.description }}</p>
        </div>
      </div>
      <!-- Show a message if destination details are not found -->
      <div v-else class="not-found-message">
        Destination not found.
      </div>
    </div>
  </div>
</template>
  
<script>
import sourceData from '../data.json'

export default {
  data() {
    return {
      loading: false, // Initialize loading as false
    };
  },
  computed: {
    // destination id from the parameters
    destinationId() {
      return parseInt(this.$route.params.id);
    },

    // destination details find
    destinationDetails() {
      // Set loading to true when data is being fetched
      this.loading = true;

      const details = sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );


      // Update loading state based on whether destination details are found
      this.loading = false;

      return details;
    },
  },
};
</script>
  
  
<style scoped>
/* Add styles for loading and not-found messages if needed */
.loading-message,
.not-found-message {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
</style>
  