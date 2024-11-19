import { Box } from '@mui/material'

const StyledImage = ({ image }: { image: string }) => {
  return (
    <Box
      component="img"
      src={image}
      alt="Image"
      boxShadow={4}
      sx={{
        maxWidth: '20rem',
        maxHeight: '30rem',
        height: 'auto',
        borderRadius: '8px',
        display: 'block',
        margin: '0 auto'
      }}
    />
  )
}

export default StyledImage
