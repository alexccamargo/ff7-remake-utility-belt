import { ATTACK_POWER, MAGIC_ATTACK_POWER, DEFENSE, MAGIC_DEFENSE, NEW_MATERIA } from "../store/data/effect"

export const getStats = (weapon, effects) => {

  if(!weapon) return false

  let stats = {
    [ATTACK_POWER]: weapon[ATTACK_POWER],
    [MAGIC_ATTACK_POWER]: weapon[MAGIC_ATTACK_POWER],
    [DEFENSE]: weapon[DEFENSE],
    [MAGIC_DEFENSE]: weapon[MAGIC_DEFENSE]
  }

  if(!effects) return stats

  const allWeaponEffects = new Map((weapon.cores || []).flatMap(c => c.effects).map(e => [e.id, e]))

  effects.forEach((effect) => {
    stats = allWeaponEffects.get(effect).applyEffect(stats)
  })
  return stats
}

export const getTotalSP = (weapon, effects) => {
  if(!weapon || !effects) return 0

  const allWeaponEffects = new Map((weapon.cores || []).flatMap(c => c.effects).map(e => [e.id, e]))
  return effects.map(ne => allWeaponEffects.get(ne).cost).reduce((a, b) => a + b, 0)
}

export const getConnectedAndSingleMateriaCounts = (weapon, stats) => {
  let { materia, connection, materiaGrowth } = weapon
  let currMat = materia
  let currConn = connection

  for (let i = 0; i < currConn; i++) { currMat -= 2 }

  for (let i = 0; i < stats[NEW_MATERIA]; i++) {
    if (materiaGrowth[i] === "A") {
      currMat++
    } else {
      currConn++
      currMat -= 2
    }
  }

  return {
    singleMateria: currMat,
    connectedMateria: currConn,
  }

}
