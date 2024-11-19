import { Box } from '@mui/material'

const RandomImage = () => {
  const images = ['/images/image1.png', '/images/image2.png']

  const randomImage = images[Math.floor(Math.random() * images.length)]

  return (
    <Box
      component="img"
      src={randomImage}
      alt="Random Image"
      sx={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        display: 'block',
        margin: '0 auto'
      }}
    />
  )
}

export default RandomImage
