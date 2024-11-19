import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const weightData = [
  { date: '2024-11-10', weight: 107.6 },
  { date: '2024-11-18', weight: 104.4 }
]

const Graph = () => (
  <Paper elevation={3} sx={{ padding: 4 }}>
    <Typography variant="h4" gutterBottom>
      {'Weight loss progress'}
    </Typography>
    <Box sx={{ height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={weightData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
)

export { Graph }
