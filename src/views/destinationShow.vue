<template>
  <div class="destination-details">
    <!-- Show loading message while data is being fetched -->
    <div v-if="loading" class="loading-message">
      Loading...
    </div>

    <!-- Show destination details once data is loaded -->
    <div>
      <div v-if="destinationDetails && !loading">
        <div class="destination-detail-name">
          <h2>{{ destinationDetails.name }}</h2>
        </div>
        <div class="destination-details-content">
          <img :src="`/images/${destinationDetails.image}`" :alt="destinationDetails.name">
          <p>{{ destinationDetails.description }}</p>
        </div>
      </div>
    </div>
    <!-- Show a message if destination details are not found -->
    <div class="not-found-message" v-if="notfound && !loading && !destinationDetails">
      Destination not found.
    </div>
  </div>
</template>
  
<script>
import sourceData from '../data.json'

export default {
  data() {
    return {
      loading: false, // Initialize loading as false
      destinationDetails: null,
      notfound: false
    };
  },
  computed: {
    // destination id from the parameters
    destinationId() {
      return parseInt(this.$route.params.id);
    },

    // destination details find
    // destinationDetails() {
    //   // Set loading to true when data is being fetched
    //   this.loading = true;

    //   const details = sourceData.destinations.find(
    //     (destination) => destination.id === this.destinationId
    //   );


    //   // Update loading state based on whether destination details are found
    //   this.loading = false;

    //   return details;
    // },

  },

  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`);
        if (response.ok) {
          const data = await response.json();
          this.destinationDetails = data;
        } else {
          console.error(`Error fetching data. Status: ${response.status}`);
          this.notfound = true;
        }
      } catch (error) {
        console.error('An error occurred while fetching data.', error);
        this.notfound = true;
      } finally {
        // Set loading to false once data is fetched (whether successful or not)
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchData();
    // Watch for changes in route params and update data accordingly
    this.$watch(()=>this.$route.params, this.fetchData);
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
  