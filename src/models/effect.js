const ATTACK_POWER = "AP";
const MAGIC_ATTACK_POWER = "MAP";
const DEFENSE = "DEF";
const MAGIC_DEFENSE = "MDEF";
const MAX_HP = "MAXHP";
const MAX_MP = "MAXMP";
const ATTACK_DAMAGE_PERCENT_BOOST = "AD%B";
const TEMPEST_DAMAGE_PERCENT_BOOST = "TD%B";
const PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "PDR%G";
const MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD = "MDR%G";
const NEW_MATERIAL = "MAT";
const MP_REGEN_PERCENT_BOOST = "MPR%B";

const ELEMENTAL_DEFENSE_PERCENT_BOOOST = "ED%B";
const HEALING_SPELLS_MP_COST_REDUCTION = "HSMPCR%";
const REPRIEVE = "REPRIEVE";

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

        case REPRIEVE:
            return {
                ...effect,
                applyEffect: (status) => {
                    return { ...status, reprieve: true }
                }
            }

        default:
            return null;
    }

}
