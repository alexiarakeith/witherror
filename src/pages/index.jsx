import InfoCard from '@/components/InfoCard'
import { RiPlantLine } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { TbPlant2 } from 'react-icons/tb'

export default function Home({ userCount, plantCount, gardenCount }) {
  return (
    <div>
      <h1 className='text-4xl font-fig'>Welcome to Plantopia Admin Panel 🌱</h1>

      <div className='flex justify-center items-center gap-5 py-8'>
        <InfoCard
          icon={<BiUserCircle className='mr-2' />}
          route={'/user'}
          title={'Total Users'}
          value={('000' + userCount).slice(-4)}
        />
        {/* <InfoCard
          icon={<RiPlantLine className='mr-2' />}
          route={'/plant'}
          title={'Registered Plants'}
          value={('000' + plantCount).slice(-4)}
        /> */}
        <InfoCard
          icon={<TbPlant2 className='mr-2' />}
          route={'/garden'}
          title={'User Gardens'}
          value={('000' + gardenCount).slice(-4)}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { userCount, plantCount, gardenCount } = await (
    await fetch('http://localhost:3000/api/analytics')
  ).json()
  return {
    props: {
      userCount: userCount,
      plantCount: plantCount,
      gardenCount: gardenCount,
    },
  }
}
