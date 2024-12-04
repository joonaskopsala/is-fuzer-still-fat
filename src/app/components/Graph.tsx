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
import weightData from '../weight.json'

const Graph = () => (
  <Paper elevation={3} sx={{ padding: 4, marginBottom: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      {'Painon kehitys'}
    </Typography>
    <Box
      sx={{
        height: 400,
        backgroundColor: '#3a3a3a',
        borderRadius: '8px',
        padding: 3
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={weightData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fill: 'whitesmoke', fontSize: 15 }} />
          <YAxis
            domain={['dataMin - 2', 'dataMax + 2']}
            tick={{ fill: 'whitesmoke', fontSize: 15 }}
          />
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
