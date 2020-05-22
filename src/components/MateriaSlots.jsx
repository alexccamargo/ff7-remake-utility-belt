import React from 'react'
import { Box } from '@material-ui/core'


const MateriaSlots = ({ singleMateria, connectedMateria }) => {

  const getSlots = () => {
    const slots = []

    for (let i = 0; i < connectedMateria; i++) {
      slots.push(<img key={`cmat-${i}`} src="/img/materia-connected.svg" alt="connected slots" />)
    }

    for (let i = 0; i < singleMateria; i++) {
      slots.push(<img key={`smat-${i}`} src="/img/materia-single.svg" alt="single slot" />)
    }
    return slots
  }

  return (
    <Box display={"inherit"}>
      {getSlots()}
    </Box>
  )
}

export default MateriaSlots
