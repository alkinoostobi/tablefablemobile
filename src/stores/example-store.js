import {defineStore} from 'pinia';

// Define the store
export const useStatsStore = defineStore({
  stat: 'stats',
  state: () => ({
      stats: [
        {id: "str", color: '#FF5252'},
        {id: "dex", color: '#39FFBD'},
        {id: "con", color: '#FC9538'},
        {id: "int", color: '#F6C99C'},
        {id: "wis", color: '#5C5CFF'},
        {id: "cha", color: '#C01DFC'}
      ],
    }
  ),
  getters: {
    getAllStats: (state) => state.stats,
  },
  actions: {

    // Get a specific stat by ID
    getStatById(id) {
      return this.stats.find(stat => stat.id === id);
    },

    // Update a specific stat's color and number
    updateStat(id, color, number) {
      const statIndex = this.stats.findIndex(stat => stat.id === id);
      if (statIndex !== -1) {
        this.stats[statIndex].color = color;
        this.stats[statIndex].number = number;
      }
    },
  },
});
