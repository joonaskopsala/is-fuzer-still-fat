'use client'
import Paper from '@mui/material/Paper'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import { Box, Stack, Typography } from '@mui/material'
import type { DietStatus } from '../utils'
import StyledImage from './StyledImage'

const DietStatus = ({ status }: { status: string }) => {
  const dietStatuses = [
    {
      status: 'ongoing',
      text: 'Käynnissä! 😊',
      icon: <CheckCircleIcon sx={{ fontSize: '3rem' }} />,
      image: 'images/happy.png'
    },
    {
      status: 'unclear',
      text: 'Epäselvä 🤔',
      icon: <PauseCircleIcon sx={{ fontSize: '3rem' }} />,
      image: 'images/epaselva.png'
    },
    {
      status: 'over',
      text: 'Ohi 😔',
      icon: <CancelIcon sx={{ fontSize: '3rem' }} />,
      image: 'images/ohi.png'
    }
  ]

  const currentStatus = dietStatuses.find(s => s.status === status)

  if (currentStatus) {
    return (
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h1">{'Dieetti status: '}</Typography>
          <Stack direction="column" spacing={2}>
            <Typography variant="h2">{currentStatus?.text}</Typography>
            <StyledImage image={currentStatus.image} />
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
