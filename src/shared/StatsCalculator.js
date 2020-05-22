import { ATTACK_POWER, MAGIC_ATTACK_POWER, DEFENSE, MAGIC_DEFENSE } from "../store/data/effect"

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
