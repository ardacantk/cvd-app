import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', 'red', '#FFBB28'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const data = [
  {
    name: 'Infected',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Recovered',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Deaths',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Active',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

function Chart() {
  return (
    <>
      <h5>Current state in US</h5>
      <div className='p-5'>
        <BarChart
          width={1300}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  )
}

export default Chart
