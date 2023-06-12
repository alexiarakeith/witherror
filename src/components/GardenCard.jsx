import React from 'react'

export default function GardenCard({ plant }) {
  const deletePlant = async id => {
    alert('You will delete plant with id ' + id)
    const res = await fetch(`http://localhost:3000/api/garden/delete/${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <div className='card w-80 min-h-[30rem] max-h-[30rem] bg-base-200 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={plant.image} alt={plant.name} className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{plant.nickname === '' ? plant.name : plant.nickname}</h2>
        <p>Date Added: {new Date(plant.dateAdded).toLocaleDateString()}</p>
        <div className='card-actions'>
          <button
            className='btn btn-error'
            onClick={() => deletePlant(plant.id).then(() => window.location.reload())}
          >
            Remove Plant
          </button>
        </div>
      </div>
    </div>
  )
}
