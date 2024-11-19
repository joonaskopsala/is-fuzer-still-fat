'use client'

import React from 'react'
import { Box, Typography, Link, Grid } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center'
      }}
    >
      <Typography>
        {
          'Sivun kehittäjä on näyttelijä. Sivun kehittäjän appi on osa näytelmää. Siitä ei kannata ottaa itseensä tai suuttua. :)'
        }
      </Typography>
    </Box>
  )
}

export { Footer }
