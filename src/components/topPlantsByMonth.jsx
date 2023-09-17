import React, { useEffect, useState } from 'react';
import { baseURL } from '@/variable';

const TopPlantsByMonth = () => {
  const [topPlants, setTopPlants] = useState([]);

  useEffect(() => {
    // Fetch the top plants by month data from your API
    fetch(`${baseURL}/api/garden/topPlantsByMonth`)
      .then((response) => response.json())
      .then((data) => {
        // Log the data to check what's being received
        console.log('Top Plants by Month Data:', data);
        // Set the topPlants state with the fetched data
        setTopPlants(data.topPlantsByMonth);
      })
      .catch((error) => {
        console.error('Error fetching top plants by month data:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='text-2xl font-fig'>Top Plants by Month</h2>
      {topPlants && topPlants.length > 0 ? (
        topPlants.map((monthData, index) => (
          <div key={index}>
            <h3>{`Month ${monthData.month}`}</h3>
            <ul>
              {monthData.plantCount.map((plant) => (
                <li key={plant.plantId}>{plant.name}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No top plants data available</p>
      )}
    </div>
  );
};

export default TopPlantsByMonth;