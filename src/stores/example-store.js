import {defineStore} from 'pinia';
import state from "@quasar/app-vite/templates/app/ts/store/vuex/state";

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
        getAllStats() {
            return state.stats;
        }

    },
    actions: {


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
