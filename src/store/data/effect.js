export const ATTACK_POWER = "AP"
export const ATTACK_POWER_HIGH_HP = "APHHP"
export const MAGIC_ATTACK_POWER = "MAP"
export const MAGIC_ATTACK_POWER_HIGH_HP = "MAPHHP"
export const DEFENSE = "DEF"
export const MAGIC_DEFENSE = "MDEF"
export const SPEED = "SP"
export const MAX_HP = "MAXHP"
export const MAX_MP = "MAXMP"
export const ATTACK_DAMAGE_PERCENT_BOOST = "AD%B"
export const AERIAL_ATTACK_DAMAGE_PERCENT_BOOST = "AAD%B"

export const TEMPEST_DAMAGE_PERCENT_BOOST = "TD%B"
export const PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "PDR%G"
export const PHYSICAL_DEFENSE_HIGH_HP = "PDEFHHP"
export const PHYSICAL_DEFENSE_LOW_HP = "PDEFLHP"
export const MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "MDR%G"
export const MAX_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "MAXDR%G"
export const MAGIC_DEFENSE_LOW_HP = "MDEFLHP"
export const MAGIC_DEFENSE_HIGH_HP = "MDEFHHP"

export const ATB_CHARGE_RATE_PERCENT_BOOST = "ATBCR%B"
export const BUFF_DURRATION_PERCENT_BOOST = "BD%B"
export const REAR_ASSAULT_PERCENT_BOOST = "RA%B"
export const INFLICTED_DEBUFF_DURATION_PERCENT_BOOST = "IDD%B"
export const DEBUFF_RESISTANCE = "DR"

export const NEW_MATERIA = "MAT"
export const MP_REGEN_PERCENT_BOOST = "MPR%B"
export const ELEMENTAL_DEFENSE_PERCENT_BOOOST = "ED%B"
export const HEALING_SPELLS_MP_COST_REDUCTION = "HSMPCR%"
export const PUNISHER_MODE_ATTACK_PERCENT_BOOST = "PMSAD%B"
export const PUNISHER_MODE_COUNTER_DAMAGE_PERCENT_BOOST = "PMCD%B"
export const LIMIT_BREAK_DAMAGE_PERCENT_BOOST = "LBD%B"
export const LIMIT_BREAK_PERCENT_BOOST_LOW_HP = "LB%BLHP"
export const UNBRIDLED_STRENGTH_DAMAGE_PERCENT_BOOST = "USD%B"
export const OVERCHARGE_DAMAGE_PERCENT_BOOST = "OD%B"
export const CRIPPLING_DAMAGE_PERCENT_BOOST = "CD%B"
export const WEAPON_ABILITY_CRITICAL_HIT_RATE_PERCENT_BOOST = "WACHR%B"
export const SELF_HEALING_PERCENT_BOOST_LOW_HP = "SH%LHP"
export const CONCENTRATION_ACTIVATION = "CAC"
export const FIRE_DAMAGE_PERCENT_BOOST = "FIRED%B"
export const ICE_DAMAGE_PERCENT_BOOST = "ICED%B"
export const LIGHTING_DAMAGE_PERCENT_BOOST = "LIGHTD%B"
export const WIND_DAMAGE_PERCENT_BOOST = "WINDD%B"
export const ELEMENTAL_MATERIA_DAMAGE_PERCENT_BOOST = "EMD%B"
export const CRITICAL_HIT_RATE_PERCENT_BOOST = "CHR%B"
export const CRITICAL_HIT_DAMAGE_PERCENT_BOOST = "CHD%B"
export const CRITICAL_HIT_HIT_PERCENT_BOOST_LOW_HP = "CHR%BLHP"
export const MAGIC_PERCENT_BOOST_FULL_MP = "M%BFMP"
export const ATTACK_SPELLS_MP_COST_REDACTION_PERCENT = "ASMPCR%"
export const MAGIC_PERCENT_BOOST_WITH_FULL_HP = "M%BFHP"

export const REPRIEVE = "REPRIEVE"
export const STAGGER_SIPHON = "STSIP"
export const TRADE_OFF = "TO"
export const BLOODSUCKER = "BLS"

export const effectFactory = (effect) => {
  switch (effect.type) {
    case ATTACK_POWER:
    case MAGIC_ATTACK_POWER:
    case DEFENSE:
    case MAGIC_DEFENSE:
    case MAX_HP:
    case MAX_MP:
    case ATTACK_DAMAGE_PERCENT_BOOST:
    case TEMPEST_DAMAGE_PERCENT_BOOST:
    case PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
    case MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
    case MAX_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
    case ELEMENTAL_DEFENSE_PERCENT_BOOOST:
    case HEALING_SPELLS_MP_COST_REDUCTION:
    case SPEED:
    case ATTACK_POWER_HIGH_HP:
    case MAGIC_ATTACK_POWER_HIGH_HP:
    case MP_REGEN_PERCENT_BOOST:
    case PUNISHER_MODE_ATTACK_PERCENT_BOOST:
    case LIMIT_BREAK_DAMAGE_PERCENT_BOOST:
    case LIMIT_BREAK_PERCENT_BOOST_LOW_HP:
    case PUNISHER_MODE_COUNTER_DAMAGE_PERCENT_BOOST:
    case UNBRIDLED_STRENGTH_DAMAGE_PERCENT_BOOST:
    case OVERCHARGE_DAMAGE_PERCENT_BOOST:
    case CRIPPLING_DAMAGE_PERCENT_BOOST:
    case WEAPON_ABILITY_CRITICAL_HIT_RATE_PERCENT_BOOST:
    case PHYSICAL_DEFENSE_HIGH_HP:
    case PHYSICAL_DEFENSE_LOW_HP:
    case MAGIC_DEFENSE_LOW_HP:
    case MAGIC_DEFENSE_HIGH_HP:
    case SELF_HEALING_PERCENT_BOOST_LOW_HP:
    case CONCENTRATION_ACTIVATION:
    case AERIAL_ATTACK_DAMAGE_PERCENT_BOOST:
    case BUFF_DURRATION_PERCENT_BOOST:
    case INFLICTED_DEBUFF_DURATION_PERCENT_BOOST:
    case FIRE_DAMAGE_PERCENT_BOOST:
    case ICE_DAMAGE_PERCENT_BOOST:
    case LIGHTING_DAMAGE_PERCENT_BOOST:
    case WIND_DAMAGE_PERCENT_BOOST:
    case ELEMENTAL_MATERIA_DAMAGE_PERCENT_BOOST:
    case CRITICAL_HIT_RATE_PERCENT_BOOST:
    case CRITICAL_HIT_DAMAGE_PERCENT_BOOST:
    case CRITICAL_HIT_HIT_PERCENT_BOOST_LOW_HP:
    case REAR_ASSAULT_PERCENT_BOOST:
    case DEBUFF_RESISTANCE:
    case ATB_CHARGE_RATE_PERCENT_BOOST:
    case MAGIC_PERCENT_BOOST_FULL_MP:
    case ATTACK_SPELLS_MP_COST_REDACTION_PERCENT:
    case MAGIC_PERCENT_BOOST_WITH_FULL_HP:

      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, [effect.type]: (status[effect.type] || 0) + Number.parseInt(effect.value) }
        }
      }

    case TRADE_OFF:
    case REPRIEVE:
    case STAGGER_SIPHON:
    case BLOODSUCKER:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, [effect.type]: true }
        }
      }
    case NEW_MATERIA:
      return {
        ...effect,
        applyEffect: (status) => {
          return { ...status, [NEW_MATERIA]: (status[NEW_MATERIA] || 0) + 1 }
        }
      }
    default:
      return null
  }
}

export const getConnectedAndSingleMateriaCounts = (weapon, newMaterias) => {
  console.log(weapon)
  let { materia, connection, materiaGrowth } = weapon
  let currMat = materia
  let currConn = connection

  for (let i = 0; i < currConn; i++) { currMat -= 2 }

  for (let i = 0; i < newMaterias; i++) {
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
