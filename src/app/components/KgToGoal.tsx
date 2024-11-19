import { Paper, Stack, Typography } from '@mui/material'

const KgToGoal = ({ current, goal }: { current: number; goal: number }) => {
  const countedKg = current - goal
  const getBgColor = (countedKg: number): string => {
    if (countedKg >= 15) return 'red'
    if (countedKg >= 10 && countedKg <= 13) return 'orange'
    return 'green'
  }

  const bgColor = getBgColor(countedKg)

  return (
    <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {'Kg tavoitteeseen:'}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            backgroundColor: bgColor,
            color: 'white',
            width: 100,
            height: 100,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          {countedKg}
        </Typography>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {'Joka on kaloreina:'}
        </Typography>
        <Typography variant="h3" color={bgColor}>
          {countedKg * 7700} kcal
        </Typography>
      </Stack>
    </Paper>
  )
}

export { KgToGoal }
