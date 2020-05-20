import React from 'react'


const MateriaSlots = ({ singleMateria, connectedMateria }) => {

  const getSlots = () => {
    const slots = []

    for (let i = 0; i < connectedMateria; i++) {
      slots.push(<img src="/img/materia-connected.svg" alt="connected slots" />)
    }

    for (let i = 0; i < singleMateria; i++) {
      slots.push(<img src="/img/materia-single.svg" alt="single slot" />)
    }
    return slots
  }

  return (
    <div>
      {getSlots()}
    </div>
  )
}

export default MateriaSlots
