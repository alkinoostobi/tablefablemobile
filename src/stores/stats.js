import {defineStore} from 'pinia';
import state from "@quasar/app-vite/templates/app/ts/store/vuex/state";

export const Statstore = defineStore('stats', {
  state: () => ({
    character1: {
      stats: {
        str: 10,
        dex: 14,
        con: 12,
        int: 8,
        wis: 12,
        cha: 10,
      },
      modifiers: {
        str: +0,
        dex: +2,
        con: +1,
        int: -2,
        wis: +1,
        cha: +0,
      },
      skills: {
        acro: +2,
        arca: +4,
        athl: +4,
        craf: +0,
        dece: +5,
        dipl: +3,
        inti: +3,
        lore: +2,
        medi: +4,
        natu: +2,
        occu: +3,
        perf: +5,
        reli: +6,
        soci: +5,
        stel: +1,
        surv: +3,
        thie: +2,
      },
      savings: {
        fort: +3,
        refl: +4,
        will: +3,
      }
    },
    character2: {
      stats: {
        str: 13,
        dex: 11,
        con: 15,
        int: 10,
        wis: 16,
        cha: 9,
      },
      modifiers: {
        str: +1,
        dex: +1,
        con: +2,
        int: +10,
        wis: +3,
        cha: -1,
      },
      skills: {
        acro: +2,
        arca: +4,
        athl: +4,
        craf: +0,
        dece: +5,
        dipl: +3,
        inti: +3,
        lore: +2,
        medi: +4,
        natu: +2,
        occu: +3,
        perf: +5,
        reli: +6,
        soci: +5,
        stel: +1,
        surv: +3,
        thie: +2,
      },
      savings: {
        fort: +3,
        refl: +4,
        will: +3,
      }
    }
  }),
});
