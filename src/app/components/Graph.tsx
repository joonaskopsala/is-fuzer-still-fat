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
  ResponsiveContainer,
  ReferenceLine
} from 'recharts'

const weightData = [
  { date: '2024-11-10', weight: 107.6 },
  { date: '2024-11-18', weight: 104.4 }
]

const Graph = () => (
  <Paper elevation={3} sx={{ padding: 4, marginBottom: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      {'Painon kehitys'}
    </Typography>
    <Box sx={{ height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={weightData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="weight"
            strokeWidth={3}
            stroke="#ff0000"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
)

export { Graph }
