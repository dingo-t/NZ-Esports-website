import { Chart as ChartJS,  Legend,  Title,  defaults, plugins } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import React, { useState, createContext, useEffect } from 'react';
import './graph-section.css'; 
import { color } from "chart.js/helpers";
// import ScamData from '../data/scam-data.json';


function Graph() {

  const [data, setData] = useState('');
  const [ageArray, setageArray] = useState('');
  const [hoursArray, sethoursArray] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {

        const response = await fetch('http://localhost/surveyFetch.php');

        const responseData = await response.json();

        setData(responseData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };

    fetchData();

    }, []);

    function calculateAverageHours(data) {
      // Check if data is an array
      if (!Array.isArray(data)) {
        return {};
      }
    
      const combinedData = data.reduce((acc, curr) => {
        const { age, hours } = curr;
        if (!acc[age]) {
          acc[age] = { totalHours: 0, count: 0 };
        }
        acc[age].totalHours += parseInt(hours);
        acc[age].count++;
        return acc;
      }, {});
    
      const averageData = {};
      for (let age in combinedData) {
        const totalHours = combinedData[age].totalHours;
        const count = combinedData[age].count;
        averageData[age] = totalHours / count;
      }
      return averageData;
    }
    // gets array of the average gaming hours of each age. 
    const averageHours = calculateAverageHours(data);
    console.log(averageHours)
    


    const hourvaluesArray = Object.values(averageHours);
    console.log(hourvaluesArray); 
    
    const ageKeysArray = Object.keys(averageHours);
    console.log(ageKeysArray); 
    

   
  const [chartData, setChartData] = useState({

      labels: ageKeysArray,
      datasets: [
        {
          label: 'Hours',
          data: hourvaluesArray,
          backgroundColor: [
              'rgba(248, 144, 5, 0.3)',
              'rgba(94, 186, 0, 0.3)',
              'rgba(24, 180, 187, 0.3)',
            ],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
  
  });

  setTimeout(() => {

    setChartData({
      labels: ageKeysArray,
      datasets: [
        {
          label: 'Hours',
          data: hourvaluesArray,
          backgroundColor: [
              'rgba(248, 144, 5, 0.3)',
              'rgba(94, 186, 0, 0.3)',
              'rgba(24, 180, 187, 0.3)',
            ],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    })

}, 500);

const options = {
    plugins: {
      title: {
        display: true,
        text: "Average Hours spent playing video games daily",
        color: 'white',
        font: {
          size: 30,
        }
      },
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Hours',
          color: 'white',
          font: {
            size: 16,
            weight: 'bold'
          } 
        }
      },
      x: {
        title: {
          display: true,
          text: 'Age',
          color: 'white',
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    }
}

  return (
    <div className="graph-container">
      <Bar data={chartData} options={options}/>
    </div>
  );
};

export default Graph; // Exports the Graph component
// for use in other parts of the web app