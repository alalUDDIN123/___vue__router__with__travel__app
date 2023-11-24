<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const username = ref('');
    const password = ref('');

    const login = () => {
      window.user = username.value;
      const redirectPath = route.query.redirect || "/user";
      router.push(redirectPath);
    };
    return { username, password, login };
  },
};
</script>
