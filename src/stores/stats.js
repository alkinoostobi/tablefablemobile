import {defineStore} from 'pinia';


export const Statstore = defineStore('stats', {
  state: () => ({
    tokens: {
      pcs: {
        pl1: {
          id: 'pl1',
          type: 0,
          'icon': '',
          size: {
            x: 1,
            y: 1,
          },
          position: {},
          rotation: '0deg',
          speed: 30,
          name: 'Zasalamel',
          class: 'Thaumaturge',
          dicecolor: 'rgba(36, 79, 38, 0.75)',
          race: {
            main: 'Automaton',
          },
          alignment: 'LG',
          background: 'Charlatan',
          defense: {
            ac: 15,
            hp: 12,
            fort: +1,
            refl: +4,
            will: +7,
          },
          stats: {
            str: [14, 2],
            dex: [14, 2],
            con: [20, 5],
            int: [12, 1],
            wis: [12, 1],
            cha: [18, 4],
          },
          skills: {
            Arcana: [2, 'int'],
            Athletics: [2, 'str'],
            Diplomacy: [2, 'cha'],
            Intimidate: [2, 'cha'],
            Stealth: [2, 'dex'],
            Acrobatics: [0, 'dex'],
            Crafting: [0, 'int'],
            Deception: [0, 'cha'],
            Lore: [0, 'int'],
            Medicine: [0, 'wis'],
            Nature: [0, 'wis'],
            Occultism: [0, 'int'],
            Performance: [0, 'wis'],
            Perception: [50, 'wis'],
            Religion: [0, 'wis'],
            Survival : [0, 'wis'],
            Society: [0, 'int'],
            Wisdom: [0, 'wis'],
            Thievery: [0, 'dex'],
          },
          attacks: [
            {'name': 'Long spear', 'numbOfDice': 1, 'damage': 6, 'range': 10, 'bonus': 4, 'targets': 1,}
          ]
        },
        pl2: {
          id: 'pl2',
          type: 0,
          icon: '',
          size: {
            x: 1,
            y: 1,
          },
          position: {},
          rotation: '0deg',
          speed: 30,
          name: 'Wilt Mbondu',
          dicecolor: 'rgba(55, 80, 92, 0.75)',
          class: 'Witch',
          race: {
            main: 'Gnoll',
          },
          alignment: 'LG',
          background: 'Detective',
          defense: {
            ac: 15,
            hp: 12,
            fort: 15,
            reflex: 12,
            will: 13,
          },
          stats: {
            str: [14, 2],
            dex: [15, 2],
            con: [12, 1],
            int: [12, 1],
            wis: [20, 5],
            cha: [18, 4],
          },
          skills: {
            Arcana: [2, 'int'],
            Athletics: [2, 'str'],
            Diplomacy: [2, 'cha'],
            Intimidate: [2, 'cha'],
            Stealth: [2, 'dex'],
            Acrobatics: [0, 'dex'],
            Crafting: [0, 'int'],
            Deception: [0, 'cha'],
            Lore: [0, 'int'],
            Medicine: [0, 'wis'],
            Nature: [0, 'wis'],
            Occultism: [0, 'int'],
            Performance: [0, 'wis'],
            Perception: [50, 'wis'],
            Religion: [0, 'wis'],
            Survival : [0, 'wis'],
            Society: [0, 'int'],
            Wisdom: [0, 'wis'],
            Thievery: [0, 'dex'],
          },
          attacks: [
            {'name': 'Long spear', 'numbOfDice': 1, 'damage': 6, 'range': 10, 'bonus': 4, 'targets': 1,}
          ]
        }
      },
      npcs: {
        mon1: {
          id: 'mon1',
          type: 1,
          icon: 'https://i.pinimg.com/originals/ff/9c/48/ff9c4808809368fbd58106140977708b.png',
          position: {},
          rotation: '45',
          speed: 30,
          size: {
            'x': 5,
            'y': 5
          },
          name: 'APPARITION',
          level: 3,
          perception: 15,
          defense: {
            ac: 15,
            hp: 12,
            fort: 15,
            reflex: 12,
            will: 13,
          },
          attacks: [
            {'bonus': 14, 'numbOfDice': 1, 'damage': 6, 'range': 5, 'targets': 1,}
          ]
        },
        mon2: {
          id: 'mon2',
          type: 1,
          icon: 'https://s3.amazonaws.com/files.d20.io/marketplace/2222383/DSzCtKYufMLb9EinYYX2ug/med.png?1642080635715',
          position: {},
          rotation: '90deg',
          speed: 30,
          size: {
            x: 3,
            y: 3
          },
          name: 'GIANT CRAB',
          level: 3,
          perception: 12,
          defense: {
            ac: 15,
            hp: 12,
            fort: 15,
            reflex: 12,
            will: 13,
          },
          attacks: [
            {'bonus': 14, 'numbOfDice': 1, 'damage': 6, 'range': 5, 'targets': 1,}
          ]
        },
      }
    },

  }),
  actions: {
    changetokenInfo(token) {
      this.tokens[token.id] = token;
    },
    changeHp(token,category, hp) {
      this.tokens[category][token].defense.hp += hp;
    }
  },
});

