<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <div class="square" @click="changeRoute('/path1')" style="background-color: red;"></div>
      <div class="square" @click="changeRoute('/path2')" style="background-color: green;"></div>
      <div class="square" @click="changeRoute('/path3')" style="background-color: blue;"></div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    changeRoute(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.square {
  width: 33.33%;
  height: 100vh;
  display: inline-block;
}
</style>
