<template>
  <span class="go-back">
    <button v-on:click="$router.back()">Go Back</button>
  </span>
</template>


<script>
  export default{
    name:"go-back"
  }
</script>