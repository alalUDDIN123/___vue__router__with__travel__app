<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <router-link :to="{ name: 'Invoices' }">
      <button>Invoices</button>
    </router-link>
    <button @click="logout">Log Out</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "home" });
    },
  },
};
</script>
