import { useState, useEffect } from 'react'
import { Box } from '@mui/material'

const RandomImage = () => {
  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png'
  ]

  const [randomImage, setRandomImage] = useState(images[0])

  useEffect(() => {
    const selectedImage = images[Math.floor(Math.random() * images.length)]
    setRandomImage(selectedImage)
  }, [])

  return (
    <Box
      component="img"
      src={randomImage}
      boxShadow={4}
      alt="Random Image"
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

export default RandomImage
