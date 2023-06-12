import { supabase } from '@/util/supabase-client'

export default async function handler(req, res) {
  const id = parseInt(req.query.id)

  if (req.method === 'DELETE') {
    const { data, error } = await supabase.from('plants').delete().eq('id', id)

    if (error) {
      return res.status(500).json({ error })
    }

    return res.status(200).json({ message: 'Plant deleted', data })
  }
}
