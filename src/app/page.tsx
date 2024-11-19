'use client'

import React from 'react'
import { Graph } from './components/Graph'
import { DietStatus } from './components/DietStatus'
import { Stack } from '@mui/material'
import { Title } from './components/Title'
import { FatnessStatus } from './components/FatnessStatus'
import { Footer } from './components/Footer'
import { KgToGoal } from './components/KgToGoal'

export default function Page() {
  return (
    <>
      <Title />
      <Stack spacing={3} marginBottom="2rem">
        <Stack direction="row" spacing={3}>
          <DietStatus status={'ongoing'} />
          <FatnessStatus isFat={true} />
          <KgToGoal current={104} goal={85} />
        </Stack>
        <Graph />
      </Stack>
      <Footer />
    </>
  )
}
