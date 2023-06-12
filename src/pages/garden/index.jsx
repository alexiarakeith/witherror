import Link from 'next/link'
import React from 'react'

export default function UserPage({ users }) {
  return (
    <div>
      <h1 className='text-4xl font-fig'>Gardens in Plantopia</h1>
      <div className='w-[100%] flex justify-center items-center my-5'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Owner Email</th>
              <th>Garden Name</th>
              <th>Signup Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{new Date(user.signupDate).toLocaleDateString()}</td>
                <td>
                  <Link className='btn btn-ghost btn-xs' href={`/garden/${user.gardenId}`}>
                    Garden Plants
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { users } = await (await fetch('http://localhost:3000/api/user-accounts')).json()
  return {
    props: {
      users: users,
    },
  }
}
