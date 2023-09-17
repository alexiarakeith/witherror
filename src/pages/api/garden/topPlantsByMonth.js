export default async function handler(req, res) {
    try {
      // Fetch data from Supabase
      const { data, error } = await supabase
        .from('plants')
        .select(
          'EXTRACT(MONTH FROM pt."createdAt") AS month',
          'pt."plantId"',
          'COUNT(pt."plantId") AS plantCount'
        )
        .innerJoin('gardens AS gt', 'pt."gardenId" = gt."id"')
        .groupBy('month', 'pt."plantId"')
        .orderBy('month', 'plantCount', { ascending: false })
        .limit(5);
  
      // Handle any errors
      if (error) {
        console.error('Error fetching top plants by month data:', error);
        return res.status(500).json({ error: 'Error fetching data' });
      }
  
      // Send the data as the response
      res.status(200).json({ TopPlantsByMonth: data });
    } catch (error) {
      console.error('Error in API route:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  