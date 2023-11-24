
<template>
  <div class="container">
    <TheNavigation />
    <router-view></router-view>
  </div>
</template>


<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: "main-app",
  components:{
    TheNavigation
  }
}
</script>
