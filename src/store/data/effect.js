export const ATTACK_POWER = "AP"
export const MAGIC_ATTACK_POWER = "MAP"
export const MAGIC_ATTACK_POWER_HIGH_HP = "MAPHHP"
export const DEFENSE = "DEF"
export const MAGIC_DEFENSE = "MDEF"
export const MAX_HP = "MAXHP"
export const MAX_MP = "MAXMP"
export const ATTACK_DAMAGE_PERCENT_BOOST = "AD%B"
export const TEMPEST_DAMAGE_PERCENT_BOOST = "TD%B"
export const PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "PDR%G"
export const PHYSICAL_DEFENSE_HIGH_HP = "PDEFHHP"
export const PHYSICAL_DEFENSE_LOW_HP = "PDEFLHP"
export const MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "MDR%G"
export const NEW_MATERIAL = "MAT"
export const MP_REGEN_PERCENT_BOOST = "MPR%B"
export const ELEMENTAL_DEFENSE_PERCENT_BOOOST = "ED%B"
export const HEALING_SPELLS_MP_COST_REDUCTION = "HSMPCR%"
export const PUNISHER_MODE_ATTACK_PERCENT_BOOST = "PMSAD%B"
export const PUNISHER_MODE_COUNTER_DAMAGE_PERCENT_BOOST = "PMCD%B"
export const LIMIT_BREAK_DAMAGE_PERCENT_BOOST = "LBD%B"
export const LIMIT_BREAK_PERCENT_BOOST_LOW_HP = "LB%LHP"
export const SELF_HEALING_PERCENT_BOOST_LOW_HP = "SH%LHP"
export const TRADE_OFF = "TO"

export const REPRIEVE = "REPRIEVE"

export const effectFactory = (effect) => {
  switch (effect.type) {
    case ATTACK_POWER:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, attackPower: (status.attackPower || 0) + Number.parseInt(effect.value) }
        }
      }
    case MAGIC_ATTACK_POWER:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, magicAttackPower: (status.magicAttackPower || 0) + Number.parseInt(effect.value) }
        }
      }
    case DEFENSE:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, defense: (status.defense || 0) + Number.parseInt(effect.value) }
        }
      }

    case MAGIC_DEFENSE:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, magicDefense: (status.magicDefense || 0) + Number.parseInt(effect.value) }
        }
      }
    case MAX_HP:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, maxHp: (status.maxHp || 0) + Number.parseInt(effect.value) }
        }
      }
    case MAX_MP:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, maxMp: (status.maxMp || 0) + Number.parseInt(effect.value) }
        }
      }
    case ATTACK_DAMAGE_PERCENT_BOOST:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, attackPercentBoost: (status.attackPercentBoost || 0) + Number.parseInt(effect.value) }
        }
      }
    case TEMPEST_DAMAGE_PERCENT_BOOST:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, tempestPercentBoost: (status.tempestPercentBoost || 0) + Number.parseInt(effect.value) }
        }
      }

    case PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, physicalDamageReductionPercentGuard: (status.physicalDamageReductionPercentGuard || 0) + Number.parseInt(effect.value) }
        }
      }
    case MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, magicDamageReductionPercentGuard: (status.magicDamageReductionPercentGuard || 0) + Number.parseInt(effect.value) }
        }
      }
    case NEW_MATERIAL:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, numMateria: (status.numMateria || 0) + 1 }
        }
      }
    case MP_REGEN_PERCENT_BOOST:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, mpRegenPercentBoost: (status.mpRegenPercentBoost || 0) + Number.parseInt(effect.value) }
        }
      }

    case ELEMENTAL_DEFENSE_PERCENT_BOOOST:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, elementalDefensePercent: (status.elementalDefensePercent || 0) + Number.parseInt(effect.value) }
        }
      }

    case HEALING_SPELLS_MP_COST_REDUCTION:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, healingSpellMPCostPercentReduction: (status.healingSpellMPCostPercentReduction || 0) + Number.parseInt(effect.value) }
        }
      }
    case MAGIC_ATTACK_POWER_HIGH_HP:
    case PUNISHER_MODE_ATTACK_PERCENT_BOOST:
    case LIMIT_BREAK_DAMAGE_PERCENT_BOOST:
    case PUNISHER_MODE_COUNTER_DAMAGE_PERCENT_BOOST:
    case PHYSICAL_DEFENSE_HIGH_HP:
    case PHYSICAL_DEFENSE_LOW_HP:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, [effect.type]: (status[effect.type] || 0) + Number.parseInt(effect.value) }
        }
      }

    case TRADE_OFF:
    case REPRIEVE:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, [effect.type]: true }
        }
      }

    default:
      return null
  }

}
