import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Analytics = () => {
  const data = [
    {
      "Year": "2007",
      "Students": 4000,
      "GPA-5": 2400,
      "amt": 2400
    },
    {
      "Year": "2007",
      "Students": 3000,
      "GPA-5": 1398,
      "amt": 2210
    },
    {
      "Year": "2007",
      "Students": 2000,
      "GPA-5": 9800,
      "amt": 2290
    },
    {
      "Year": "2007",
      "Students": 2780,
      "GPA-5": 3908,
      "amt": 2000
    },
    {
      "Year": "2007",
      "Students": 1890,
      "GPA-5": 4800,
      "amt": 2181
    },
    {
      "Year": "2007",
      "Students": 2390,
      "GPA-5": 3800,
      "amt": 2500
    },
    {
      "Year": "2007",
      "Students": 3490,
      "GPA-5": 4300,
      "amt": 2100
    }
  ]
  return (
    <div className=''>
      <LineChart width={730} height={250} data={data}
      animationDuriation={5000}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Students" stroke="darkblue" />
        <Line type="monotone" dataKey="GPA-5" stroke="green" />
      </LineChart>
    </div>
  );
};

export default Analytics;