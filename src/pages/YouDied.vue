<template>
  <div class="you-died">
    <h1>You Died</h1>
    <p>Skill Issue</p>

  </div>
</template>

<script>
export default {
  name : 'YouDied',
  methods: {

  }
}
</script>

<style scoped>
.you-died {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
}

h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

button {
  padding: 8px 16px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
