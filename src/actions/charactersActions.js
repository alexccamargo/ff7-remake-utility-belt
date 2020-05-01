export const GET_CHARACTER_LIST = 'GET CHARACTERS'
export const GET_CHARACTER_LIST_SUCCESS = 'GET_CHARACTER_LIST_SUCCESS'
export const GET_CHARACTER_LIST_FAILURE = 'GET_CHARACTER_LIST_FAILURE'

export const getCharacterList = () => ({ type: GET_CHARACTER_LIST })
export const getCharacterListSuccess = CHARACTERS => ({
  type: GET_CHARACTER_LIST_SUCCESS,
  payload: CHARACTERS,
})

export const getCharacterListFailure = () => ({ type: GET_CHARACTER_LIST_FAILURE })

const data = [
  {
    id: "a",
    name: "Aerith",
    image: "/img/aerith.png",
    weapons: [
      { 
        id: "wa1", name: "Guard Stick", attackPower:10, magicAttackPower:7, defense: 5, magicDefense:6,
        cores: [ 
          {
            id: "wa1c1",
            name: "Core 1",
            cost: 6,
            effects: [
              {
                id: "wac1e1",
                type: "AP",
                name: "Attack Power",
                value: "6",
              },
              {
                id: "wac1e2",
                type: "MAP",
                name: "Magic Attack Power",
                value: "6",
              },
            ]
          },
          {
            id: "wa1c2",
            name: "Core 2",
            cost: 16,
            effects: [
              {
                id: "wac2e1",
                effect: "Attack Power",
                value: "12"
              },
              {
                id: "wac2e2",
                effect: "Magic Attack Power",
                value: "12"
              },
            ]
          }
        ]
     },
      { id: "wa2", name: "Silver Staff", attackPower:14, magicAttackPower: 10},
      { id: "wa3", name: "Arcane Scepter", },
      { id: "wa4", name: "Mythril Rod", },
      { id: "wa5", name: "Bladed Staff", },
      { id: "wa6", name: "Reinforced Staff", },
    ],
  },
  {
    id: "b",
    name: "Baret",
    image: "/img/barret.jpeg",
    weapons: [
      { id: "wb1", name: "Gatling Gun" },
      { id: "wb2", name: "Light Machine Gun" },
      { id: "wb3", name: "Big Bertha" },
      { id: "wb4", name: "Wrecking Ball" },
      { id: "wb5", name: "EKG Cannon" },
    ],
  },
  {
    id: "c",
    name: "Cloud",
    image: "/img/cloud.png",
    weapons: [
      { id: "wc1", name: "Buster Sword" },
      { id: "wc2", name: "Iron Blade" },
      { id: "wc3", name: "Nail Bat" },
      { id: "wc4", name: "Hardedge" },
      { id: "wc5", name: "Mythril Saber" },
      { id: "wc6", name: "Twin Stinger" },
    ],
  },
  {
    id: "t",
    name: "Tifa",
    image: "/img/tifa.jpg",
    weapons: [
      { id: "wt1", name: "Leather Gloves" },
      { id: "wt2", name: "Metal Knuckles" },
      { id: "wt3", name: "Sonic Strikers" },
      { id: "wt4", name: "Feathered Gloves" },
      { id: "wt5", name: "Mythril Claws" },
      { id: "wt6", name: "Purple Pain" },
    ],
  },
];

export function fetchCharacters() {
  return async dispatch => {
    dispatch(getCharacterList())

    try {
      dispatch(getCharacterListSuccess(data))
    } catch (error) {
      dispatch(getCharacterListFailure())
    }
  }
}
