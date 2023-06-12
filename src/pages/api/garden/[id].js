import { supabase } from '@/util/supabase-client'
import axios from 'axios'

export default async function handler(req, res) {
  const id = parseInt(req.query.id)
  const perenualKey = 'sk-3vym648708f9cc06c1231'
  // await fetch(`https://perenual.com/api/species/details/${plant.plantId}?key=${perenualKey}`)

  const { data: plantData, error } = await supabase.from('GardenPlants').select('*')

  if (error) {
    return res.status(500).json({ error })
  }

  // filter plants by gardenId
  let plants = plantData.filter(plant => plant.gardenId === id)
  // container for plant details
  let plantDetails = []

  await plants.forEach(async plant => {
    const { data } = await axios.get(
      `https://perenual.com/api/species/details/${plant.plantId}?key=${perenualKey}`
    )
    plantDetails.push({
      plantId: plant.plantId,
      nickname: plant.nickname,
      dateAdded: plant.dateAdded,
      isIndoor: data.indoor,
      image: data.default_image.thumbnail,
      name: data.common_name,
    })
  })

  setTimeout(() => {
    console.log(plantDetails)
    res.status(200).json({ gardenId: id, plants: plantDetails })
  }, 3000)
}
