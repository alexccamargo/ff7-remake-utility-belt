
import data from "./data.json"
import { effectFactory } from "./effect"

export const getDataFromJson = () => {
  return data.map(mapCharacter)
}

const mapCharacter = (character) => {
  return {
    id: character.id,
    image: character.img,
    weapons: Object.keys(character.w || [])
      .reduce((result, key) => {
        result[key] = mapWeapon(key, character.w[key], )
        return result
      }, {})
  }
}

const mapWeapon = (wpId, weapon) => {
  return {
    id: wpId,
    attackPower: weapon.ap || 0,
    magicAttackPower: weapon.map || 0,
    defense: weapon.def || 0,
    magicDefense: weapon.mdef || 0,
    materia: weapon.mat || 0,
    connection: weapon.cmat || 0,
    materiaGrowth: weapon.matg || [],
    cores: (weapon.cs || []).map((c, i) => mapCore(c, i))
  }

}

const mapCore = (core, index) => {
  const id = `c${index + 1}`
  return {
    id,
    cost: core.ct,
    effects: (core.efs || []).map((e, i) => mapEffect(e, id, core.ct, i))
  }
}

const mapEffect = (effect, coreId, cost, index) => {
  const id = `${coreId}e${index + 1}`
  return effectFactory({
    id,
    cost,
    type: effect.t,
    value: effect.v,
  })
}
