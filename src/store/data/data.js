
import data from "./data.json"
import { effectFactory } from "./effect";

export const getDataFromJson = () => {
    return data.map(mapCharacter);
}

const mapCharacter = (character) => {
    return {
        id: character.id,
        image: character.img,
        weapons: (character.w || []).map(mapWeapon)
    }
}

const mapWeapon = (weapon)=> {
    return {
        id: weapon.id,
        attackPower: weapon.ap || 0,
        magicAttackPower: weapon.map || 0,
        defense: weapon.def || 0,
        magicDefense: weapon.mdef || 0,
        materia: weapon.mat || 0,
        connection: weapon.cmat || 0,
        cores: (weapon.cs || []).map(mapCore)
    }
   
}

const mapCore = (core) => {
    return {
        id: core.id,
        cost: core.ct,
        effects: (core.efs|| []).map((e) => mapEffect(core, e))
    }
}

const mapEffect = (core, effect) => {
    return effectFactory({
        id: `${core.id}${effect.id}`,
        type: effect.t,
        value: effect.v,
        cost: core.ct,
    })
}