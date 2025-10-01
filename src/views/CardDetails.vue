<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>


<template>
    {{ Route.params.id }}
</template>