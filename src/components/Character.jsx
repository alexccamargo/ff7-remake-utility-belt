import React from 'react'
import { Link } from "react-router-dom";
import { translate } from 'react-i18next';

const Character = ({ character, t }) => {
    const weapons = character.weapons

    const renderWeaponLinks = () => {
        return (
            <ul>
                {
                    weapons.map(w => (
                        <li key={w.id}>
                            <Link to={`/character/${character.id}/weapon/${w.id}`}>
                                {w.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    };

    return (
        <div>
            <h1>{t(`character.${character.id}`)}</h1>
            <ul>
                {renderWeaponLinks()}
            </ul>
        </div>
    )
}

export default translate()(Character);
