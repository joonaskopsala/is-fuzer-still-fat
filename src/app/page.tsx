'use client'

import React from 'react'
import { Graph } from './components/Graph'
import { DietStatus } from './components/DietStatus'
import { Stack } from '@mui/material'
import { Title } from './components/Title'
import { FatnessStatus } from './components/FatnessStatus'

export default function Page() {
  return (
    <>
      <Title />
      <Stack spacing={3}>
        <Stack direction="row" spacing={3}>
          <DietStatus status={'ongoing'} />
          <FatnessStatus isFat={true} />
        </Stack>
        <Graph />
      </Stack>
    </>
  )
}
