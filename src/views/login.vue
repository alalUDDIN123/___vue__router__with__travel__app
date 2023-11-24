// Login.vue

<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here (e.g., check credentials)
      // For simplicity, let's assume login is successful
      // You might want to add authentication logic, store user info, etc.
        localStorage.setItem("authToken",JSON.stringify(this.username))
      // Redirect to /dashboard with the username as a query parameter
      this.$router.push({ path: '/dashboard', query: { username: this.username } });
    },
  },
};
</script>
