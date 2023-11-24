<template>
  <h1>My Invoices</h1>
</template>
<script>
import { onBeforeRouteLeave } from "vue-router";
export default {
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm(
        "Are you sure you want to leave? Invoices are super important!"
      );
      // cancel the navigation and stay on the same page
      if (!answer) return false;
    });
  },
};
</script>
