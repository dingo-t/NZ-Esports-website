import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import React, { useState, createContext, useEffect } from 'react';
import './graph-section.css'; 
import ScamData from '../data/scam-data.json';


let btnCount = 0;


function Graph() {

  const [chartData, setChartData] = useState({
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Initial Data',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            'rgba(55, 99, 132, 0.2)',
            'rgba(55, 159, 64, 0.2)',
            'rgba(55, 205, 86, 0.2)',
            'rgba(5, 192, 192, 0.2)',
            'rgba(14, 162, 235, 0.2)',
          ],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,

      },
    ],
  });


  const updateData = () => {
    
    btnCount = btnCount + 1

    if (btnCount > 1) window.location.reload();
 
    console.log(btnCount)
    setChartData({
      labels: ['F', 'G', 'H', 'I', 'J'],
      datasets: [
        {
          label: 'Updated Data',
          data: [10, 5, 15, 7, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div>
    <div className="graph-container">
      <Bar data={chartData} />
      <button id='graph-update-btn' onClick={updateData}>Update Data</button>
    </div>
    </div>
  );
};

export default Graph; // Exports the Graph component
// for use in other parts of the web app