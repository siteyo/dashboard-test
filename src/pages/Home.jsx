import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const Home = () => {
  return (
    <div className="home">
      <div>
        <Pie data={data} />
      </div>
      <div className="card-list">
        <h2>Home</h2>
        <p>test text</p>
      </div>
    </div>
  );
};

export default Home;
