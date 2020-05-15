import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Weapon from '../components/Weapon';
import { selectCharacter } from '../store/selectors/characterSelector';
import { selectUserDataByCharacter } from '../store/selectors/userDataSelector';

const CharacterPage = () => {

  let { id, wpId } = useParams();
  const character = useSelector(state => selectCharacter(state, id))
  const characterUserData = useSelector(state => selectUserDataByCharacter(state, id));

  const renderCharacter = () => {
    if (!character) return <p>Unable to find character</p>

    return <Weapon character={character} selectedWeapon={wpId} spAmount={characterUserData.spAmount}>{character.name}</Weapon>

  }

  return (
    <div>
      <Link to={`/character/${id}`}>Back to weapon selection</Link>
      {renderCharacter()}
    </div>
  )
}

export default CharacterPage
