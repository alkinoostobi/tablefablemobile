import { defineStore } from 'pinia';

export const utilitiesStore = defineStore('utilities', {
  state: () => ({
    icons : {
      sword : 'data:image/png;base64,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'
    }
  }),
});