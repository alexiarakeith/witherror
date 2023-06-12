import { supabase } from '@/util/supabase-client'

export default async function handler(req, res) {
  const { data: users, error: userError } = await supabase.from('UserWithGardenID').select('*')

  if (userError) {
    return res.status(500).json({ error: userError })
  }

  let userInfo = users.map(user => {
    return {
      email: user.email,
      name: user.name,
      signupDate: user.createdAt,
      gardenId: user.gardenId,
    }
  })

  res.status(200).json({
    users: userInfo,
  })
}
