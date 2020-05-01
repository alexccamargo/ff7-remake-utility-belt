import React from 'react'
import { Link } from "react-router-dom";

export const Character = (props) => {
    const character = props.character
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
            <h1>{character.name}</h1>
            <ul>
                {renderWeaponLinks()}
            </ul>
        </div>
    )
}
