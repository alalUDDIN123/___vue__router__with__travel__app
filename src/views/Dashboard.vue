// Dashboard.vue

<template>
    <div>
        <h1>Welcome to the Dashboard, {{ username }}!</h1>
        <!-- Your dashboard content here -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
        };
    },
    created() {
        // Access the username from the route's query parameters
        this.username = this.$route.query.username;
    },
};
</script>
