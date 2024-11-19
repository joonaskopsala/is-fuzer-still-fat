'use client'
import Paper from '@mui/material/Paper'
import { Stack, Typography } from '@mui/material'
import RandomImage from './RandomImage'
import StyledImage from './StyledImage'

const FatnessStatus = ({ isFat }: { isFat: boolean }) => {
  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      {isFat ? (
        <Stack spacing={2}>
          <Typography variant="h1">{'Pullukka status: '}</Typography>
          <Stack direction="column" spacing={2}>
            <Typography variant="h2">{'Kyllä vain'}</Typography>
            <RandomImage />
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={2}>
          <Typography variant="h1">{'Pullukka status: '}</Typography>
          <Stack direction="column" spacing={2}>
            <Typography variant="h2">{'Ei ole'}</Typography>
            <Typography variant="h2">{'🎉🎉✨🧨🎇🎈🎊'}</Typography>
            <StyledImage image={'images/ei.png'} />
          </Stack>
        </Stack>
      )}
    </Paper>
  )
}

export { FatnessStatus }
