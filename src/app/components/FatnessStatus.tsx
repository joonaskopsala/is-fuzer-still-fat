'use client'
import Paper from '@mui/material/Paper'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import { Box, Stack, Typography } from '@mui/material'
import type { DietStatus } from '../utils'
import RandomImage from './RandomImage'

const FatnessStatus = ({ isFat }: { isFat: boolean }) => {
  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h1">{'Fatness status: '}</Typography>
        <Stack direction="column" spacing={2}>
          <Typography variant="h2">{'Yes'}</Typography>
          <RandomImage />
        </Stack>
      </Stack>
    </Paper>
  )
}

export { FatnessStatus }
