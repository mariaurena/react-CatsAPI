import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

/*
custom hook (siempre deben empezar con use)
diferencia a una función normal: en los hooks puede usarse useState
buena practica pasarle el objeto { fact } en vez de simplemente fact
*/
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // efecto para recuperar la imagen cada vez que tenemos una nueva cita
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ')[0]
    console.log(threeFirstWords)

    // Eliminamos el procesamiento JSON y usamos directamente el string de la URL
    setImageUrl(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red`)
    console.log(imageUrl)
  }, [fact])

  return { imageUrl }
}
