<template>
  <div class="about">about{{baseURL}}</div>
</template>

<script>
export default {
    computed: {
        baseURL() {
            return process.env.VUE_APP_API
        }
    }
}
</script>

<style>

</style>