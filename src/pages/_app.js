import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='navbar bg-primary-600 text-primary-content'>
        <Link className='btn btn-ghost normal-case text-xl font-fig' href='/'>
          Plantopia Admin Panel 🌱
        </Link>
      </div>
      <div className='mx-[2%] my-5 font-fig'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
