import React from 'react'

import { useTranslation } from 'react-i18next'
import { Box } from '@material-ui/core';

import {
  ATTACK_POWER,
  MAGIC_ATTACK_POWER,
  DEFENSE,
  MAGIC_DEFENSE,
  MAX_HP,
  MAX_MP,
} from '../../store/data/effect'

const BasicStatsTable = ({ stats }) => {
  const { t } = useTranslation();

  const getLabelValue = (type) => {
    return (
      <Box mr={2} key={`bst-${type}`}>
        <strong>{t(`common.${type}`)}:</strong> {stats[type] || '-'}
      </Box>
    )
  }

  const getStats = () => {

    return [
      ATTACK_POWER,
      MAGIC_ATTACK_POWER,
      DEFENSE,
      MAGIC_DEFENSE,
      MAX_HP,
      MAX_MP
    ]
    .filter(x => stats[x])
    .map(x => getLabelValue(x))
  }

  return (
    <Box mb={2} display={'flex'} flexWrap="wrap">
      {getStats()}
    </Box>
  )
}

export default BasicStatsTable
