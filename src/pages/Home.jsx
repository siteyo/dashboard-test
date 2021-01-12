import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { GlobalContext } from '../contexts/Global';

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
  const { period, _ } = useContext(GlobalContext);

  return (
    <div className="home">
      <div>
        <Pie data={data} />
      </div>
      <div className="card-list">
        <h2>Home</h2>
        <p>test text</p>
        {period}
      </div>
    </div>
  );
};

export default Home;
