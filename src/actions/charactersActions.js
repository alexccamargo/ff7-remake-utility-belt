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
        id: "wa1", name: "Guard Stick", 
        attackPower: 29, magicAttackPower: 43, defense: 0, magicDefense: 0, materia: 2, connection: 0,
        cores: [
          {
            id: "wa1c1",
            name: "Guard Stick Core",
            cost: 8,
            effects: [
              { id: "wac1e1", type: "MAP", value: "12" },
              { id: "wac1e2", type: "DEF", value: "7" },
              { id: "wac1e3", type: "MDEF", value: "7" },
              { id: "wac1e4", type: "MAXHP", value: "150" },
              { id: "wac1e5", type: "MAXMP", value: "8" },
            ]
          },
          {
            id: "wa1c2",
            name: "Guard Stick Sub-Core I",
            cost: 10,
            effects: [
              { id: "wac2e1", type: "AD%B", value: "5" },
              { id: "wac2e2", type: "TD%B", value: "5" },
              { id: "wac2e3", type: "PDR%G", value: "10" },
              { id: "wac2e4", type: "MDR%G", value: "10" },
              { id: "wac2e5", type: "MAT", },
            ]
          },
          {
            id: "wa1c3",
            name: "Guard Stick Sub-Core II",
            cost: 12,
            effects: [
              { id: "wac3e1", type: "MAP", value: "18" },
              { id: "wac3e2", type: "MAXHP", value: "150" },
              { id: "wac3e3", type: "MAXMP", value: "8" },
              { id: "wac3e4", type: "MPR%B", value: "10" },
              { id: "wac3e5", type: "MAT", },
              { id: "wac3e6", type: "MAT", },
            ]
          },
          {
            id: "wa1c4",
            name: "Guard Stick Sub-Core III",
            cost: 14,
            effects: [
              { id: "wac4e1", type: "MAP", value: "18" },
              { id: "wac4e2", type: "MAXHP", value: "150" },
              { id: "wac4e3", type: "MAXMP", value: "8" },
              { id: "wac4e4", type: "ED%B", value: "5" },
              { id: "wac4e5", type: "HSMPCR%", value: "20" },
              { id: "wac4e6", type: "MAT", },
              { id: "wac4e7", type: "MAT", },
            ]
          },
          {
            id: "wa1c5",
            name: "Guard Stick Sub-Core IV",
            cost: 16,
            effects: [
              { id: "wac4e1", type: "MAP", value: "18" },
              { id: "wac4e2", type: "MAXHP", value: "200" },
              { id: "wac4e3", type: "MAXMP", value: "10" },
              { id: "wac4e4", type: "REPRIEVE", },
              { id: "wac4e5", type: "MAT", },
              { id: "wac4e6", type: "MAT", },
            ]
          }
        ]
      },
      { id: "wa2", name: "Silver Staff", attackPower: 14, magicAttackPower: 10 },
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
