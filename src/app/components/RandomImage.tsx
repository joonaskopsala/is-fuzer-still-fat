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
    const interval = setInterval(() => {
      const selectedImage = images[Math.floor(Math.random() * images.length)]
      setRandomImage(selectedImage)
    }, 10000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <Box
      component="img"
      src={randomImage}
      boxShadow={4}
      alt="Random Image"
      sx={{
        borderRadius: '8px',
        display: 'block',
        margin: '0 auto',
        maxHeight: '20rem'
      }}
    />
  )
}

export default RandomImage
