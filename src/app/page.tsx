'use client'

import React from 'react'
import { Graph } from './components/Graph'
import { DietStatus } from './components/DietStatus'
import { Stack } from '@mui/material'
import { Title } from './components/Title'
import { Footer } from './components/Footer'
import { KgToGoal } from './components/KgToGoal'
import weightData from './weight.json'

export default function Page() {
  const currentWeight = weightData[weightData.length - 1].weight
  return (
    <>
      <Title />
      <Stack spacing={3} marginBottom="2rem">
        <Graph />
        <Stack direction="row" spacing={3}>
          <DietStatus status={'ongoing'} />
          <KgToGoal current={currentWeight} goal={85} />
        </Stack>
      </Stack>
      <Footer />
    </>
  )
}
