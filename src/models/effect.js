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
    const id = effect.id;
    switch (effect.type) {
        case ATTACK_POWER:
            return {
                id,
                name: "Attack Power +" + effect.value,
                applyEffect: (status) => {
                    return { ...status, attackPower: (status.attackPower || 0) + Number.parseInt(effect.value) }
                }
            }
        case MAGIC_ATTACK_POWER:
            return {
                id,
                name: "Magic Attack Power +" + effect.value,
                applyEffect: (status) => {
                    return { ...status, magicAttackPower: (status.magicAttackPower || 0) + Number.parseInt(effect.value) }
                }
            }
        case DEFENSE:
            return {
                id,
                name: "Defense +" + effect.value,
                applyEffect: (status) => {
                    return { ...status, defense: (status.defense || 0) + Number.parseInt(effect.value) }
                }
            }

        case MAGIC_DEFENSE:
            return {
                id,
                name: "Magic Defense +" + effect.value,
                applyEffect: (status) => {
                    return { ...status, magicDefense: (status.magicDefense || 0) + Number.parseInt(effect.value) }
                }
            }
        case MAX_HP:
            return {
                id,
                name: "Max HP +" + effect.value,
                applyEffect: (status) => {
                    return { ...status, magicDefense: (status.maxHp || 0) + Number.parseInt(effect.value) }
                }
            }
        case MAX_MP:
            return {
                id,
                name: "Max MP +" + effect.value,
                applyEffect: (status) => {
                    return { ...status, mp: (status.maxMp || 0) + Number.parseInt(effect.value) }
                }
            }
        case ATTACK_DAMAGE_PERCENT_BOOST:
            return {
                id,
                name: "Attack Damage " + effect.value + "% Boost",
                applyEffect: (status) => {
                    return { ...status, attackPercentBoost: (status.attackPercentBoost || 0) + Number.parseInt(effect.value) }
                }
            }
        case TEMPEST_DAMAGE_PERCENT_BOOST:
            return {
                id,
                name: "Tempest Damage " + effect.value + "% Boost",
                applyEffect: (status) => {
                    return { ...status, tempestPercentBoost: (status.tempestPercentBoost || 0) + Number.parseInt(effect.value) }
                }
            }

        case PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
            return {
                id,
                name: "Physical Damage Reduction " + effect.value + "% when Guarding",
                applyEffect: (status) => {
                    return { ...status, physicalDamageReductionPercentGuard: (status.physicalDamageReductionPercentGuard || 0) + Number.parseInt(effect.value) }
                }
            }
        case MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD:
            return {
                id,
                name: "Magic Damage Reduction " + effect.value + "% when Guarding",
                applyEffect: (status) => {
                    return { ...status, magicDamageReductionPercentGuard: (status.magicDamageReductionPercentGuard || 0) + Number.parseInt(effect.value) }
                }
            }
        case NEW_MATERIAL:
            return {
                id,
                name: "New Materia",
                applyEffect: (status) => {
                    return { ...status, numMateria: (status.numMateria || 0) + 1 }
                }
            }
        case MP_REGEN_PERCENT_BOOST:
            return {
                id,
                name: "MP Regeneration " + effect.value + "% Boost",
                applyEffect: (status) => {
                    return { ...status, mpRegenPercentBoost: (status.mpRegenPercentBoost || 0) + Number.parseInt(effect.value) }
                }
            }

        case ELEMENTAL_DEFENSE_PERCENT_BOOOST:
            return {
                id,
                name: "Elemental Defense " + effect.value + "% Boost",
                applyEffect: (status) => {
                    return { ...status, elementalDefensePercent: (status.elementalDefensePercent || 0) + Number.parseInt(effect.value) }
                }
            }

        case HEALING_SPELLS_MP_COST_REDUCTION:
            return {
                id,
                name: "Healing Spells MP Cost Reduction " + effect.value + "%",
                applyEffect: (status) => {
                    return { ...status, healingSpellMPCostPercentReduction: (status.healingSpellMPCostPercentReduction || 0) + Number.parseInt(effect.value) }
                }
            }

        case REPRIEVE:
            return {
                id,
                name: "Reprieve",
                applyEffect: (status) => {
                    return { ...status, reprieve: true }
                }
            }
            

        default:
            return null;
    }

}
