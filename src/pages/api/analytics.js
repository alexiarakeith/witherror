// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from '@/util/supabase-client'

/**
 * This function will fetch the number of users, plants, and gardens from the database
 * using the supabase client and return the data as a JSON object.
 * @param {*} req
 * @param {*} res
 */
export default async function handler(req, res) {
  const { data: users, error: userError } = await supabase.from('user_accounts').select()
  const { data: plants, error: plantError } = await supabase.from('plants').select()
  const { data: gardens, error: gardenError } = await supabase.from('gardens').select()
  
  if (userError || plantError || gardenError) {
    return res.status(500).json({ error: userError || plantError || gardenError })
  }
  
  res.status(200).json({
    userCount: users.length,
    plantCount: plants.length,
    gardenCount: gardens.length,
  })
}
