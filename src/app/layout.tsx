'use client'

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container
} from '@mui/material'
import theme from './theme'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
