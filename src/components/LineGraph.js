import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ email }) => {
  // Define datasets for different users
  const userDatasets = {
    'temethon1@gmail.com': [], // No data as they didn't finish a day
    'temethon2@gmail.com': [
      {
        label: '2021',
        data: [30, 45, 55, 50, 65, 75, 85, 95, 90, 100, 80, 70],
        borderColor: '#32CD32',
        backgroundColor: 'rgba(50, 205, 50, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        fill: true,
      },
    ],
    'temethon3@gmail.com': [
      {
        label: '2022',
        data: [40, 55, 65, 60, 70, 85, 95, 105, 100, 110, 90, 80],
        borderColor: '#1E90FF',
        backgroundColor: 'rgba(30, 144, 255, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        fill: true,
      },
    ],
  };

  // Get dataset for the user, if not available, return an empty dataset
  const datasets = userDatasets[email] || [];

  // Data for the line graph
  const data = {
    labels:
      datasets.length > 0
        ? [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ]
        : [], // No labels if no data
    datasets,
  };

  // Options for the line graph
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text:
          datasets.length > 0
            ? `Monthly Carbon Emissions (${email})`
            : `No Data Available for ${email}`,
        font: {
          size: 18,
        },
      },
    },
    scales:
      datasets.length > 0
        ? {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Carbon Emission (metric tons)',
              },
            },
          }
        : {}, // No scales if no data
  };

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        margin: '20px auto',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {datasets.length > 0 ? (
        <Line data={data} options={options} height={500} />
      ) : (
        <p style={{ fontSize: '18px', color: '#FF6347' }}>
          No data available for this user
        </p>
      )}
    </div>
  );
};

export default LineGraph;
