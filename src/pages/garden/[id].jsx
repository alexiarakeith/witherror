import GardenCard from '@/components/GardenCard'
import React from 'react'
import Link from 'next/link'

export default function GardenInformationPage({ gardenData }) {
  return (
    <div>
      <div className='text-4xl text-center mb-2 flex justify-between'>
        <h1>Plants in Garden of user</h1>
        <Link href='/garden' className='btn btn-secondary'>
          Go back
        </Link>
      </div>
      <div className='flex gap-5 items-center justify-center flex-wrap'>
        {gardenData.plants.map(plant => (
          <GardenCard plant={plant} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const data = await (await fetch(`http://localhost:3000/api/garden/${id}`)).json()
  return {
    props: {
      gardenData: data,
    },
  }
}
