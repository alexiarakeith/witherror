import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function InfoCard({ title, value, icon, route = '' }) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000)
  }, [])

  return (
    <div className='card max-w-[20rem] max-h-[20rem] min-w-[20rem] min-h-[20rem] bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title flex justify-center text-emerald-400 uppercase'>
          {icon} {title}
        </h2>
        <p className='text-4xl font-bold text-center mt-5'>{value}</p>
        <p className='text-center'>
          As of{' '}
          {date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
          <br />
          {date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
        <div className='card-actions block m-auto'>
          <Link className='btn btn-primary' href={route}>
            View Records
          </Link>
        </div>
      </div>
    </div>
  )
}
