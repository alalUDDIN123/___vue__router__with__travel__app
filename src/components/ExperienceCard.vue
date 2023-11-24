<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <div class="card__text">
            {{ experience.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: "experience-card",
    props: {
        experience: {
            type: Object,
            required: true

        }
    }
}
</script>