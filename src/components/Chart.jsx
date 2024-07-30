import React, { useEffect, useState } from 'react'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({data}) => {
  const [chartData, setChartData] = useState();

  const [showChart, setShowChart] = useState(false);

  useEffect(()=>{
    let tempData = {
      labels: [],
      datasets: [
        {
          label: '',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
    data.count.map((item)=>{
      tempData.labels.push(item.day);
      tempData.datasets[0].data.push(item.count);
    });
    tempData.datasets[0].label = data.name;
    setChartData(tempData);
    setShowChart(true);
  },[]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart in React'
      }
    }
  };

  return (
    <div className='flex flex-col thin-border h-[30rem] w-[30rem] gap-5'>
      <div className="flex justify-between p-2 items-center">
        <div className="flex text-2xl underline items-center">{data.name}</div>
        <a href={data.url} className='flex underline underline-offset-2 text-secondary'>Link</a>
      </div>
      <div className="flex justify-center p-2 text-lg font-semibold gap-2">
        <span className="flex underline underline-offset-2">Total Views:</span> {data.view_count}
      </div>
      {showChart && <Line data={chartData} options={options} />}
    </div>
  )
}

export default Chart