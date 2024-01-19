<template>
  <router-view />
</template>

<script>
import { defineComponent, watch } from 'vue'
import {Statstore} from "stores/stats";
import io from 'socket.io-client';
export default defineComponent({
  name: 'App',
  setup() {
    const stat = Statstore();
    const socket = io('http://localhost:8080'); // Replace with your server URL
    watch(
      () => stat.tokens,
      (tokens) => {
          for (const token in tokens.npcs) {
            if (tokens.npcs[token].defense.hp > 0) {
              socket.emit('updateTokensTable', tokens.npcs[token]);
            }
          }
      },
      {deep: true} // Watch nested properties
    );

    // Other component logic...

    return {
      // Any properties or methods you want to expose
    };
  },
})
</script>
