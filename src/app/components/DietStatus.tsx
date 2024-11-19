'use client'
import Paper from '@mui/material/Paper'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import { Box, Stack, Typography } from '@mui/material'
import type { DietStatus } from '../utils'

const DietStatus = ({ status }: { status: string }) => {
  const dietStatuses = [
    {
      status: 'ongoing',
      text: 'Ongoing! 😊',
      icon: <CheckCircleIcon sx={{ fontSize: '3rem' }} />
    },
    {
      status: 'unclear',
      text: 'Unclear 🤔',
      icon: <PauseCircleIcon sx={{ fontSize: '3rem' }} />
    },
    {
      status: 'over',
      text: 'Over 😔',
      icon: <CancelIcon sx={{ fontSize: '3rem' }} />
    }
  ]

  const currentStatus = dietStatuses.find(s => s.status === status)

  if (currentStatus) {
    return (
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h1">{'Diet status: '}</Typography>
          <Stack direction="column" spacing={2}>
            <Typography variant="h2">{currentStatus?.text}</Typography>
            <Box alignContent="center">{currentStatus?.icon}</Box>
          </Stack>
        </Stack>
      </Paper>
    )
  } else {
    return (
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography>{'No status found'}</Typography>
      </Paper>
    )
  }
}

export { DietStatus }
