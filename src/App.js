import './App.css';
import { Doughnut } from 'react-chartjs-2';
import React, { useState, useRef } from 'react';

function App() {
  const [food, setFood] = useState(0);
  const doughnut = useRef();

  const updateChart = async e => {
    e.preventDefault();
    doughnut.current.data.datasets[0].data = [food, 1450, 45, 120, 600, 115];
    doughnut.current.update();
    var data = {};
    data.food = food;
    
    const response = await fetch('/budget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const body = await response.text();
  }

  const data = {
    labels: ['Food', 'Rent', 'Entertainment', 'Utilities', 'Loans', 'Gas'],
    datasets: [
      {
        label: 'Monthly Cost Breakdown',
        data: [0, 1450, 45, 120, 600, 115],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="App">
      <h1>
        Monthly Cost Breakdown
      </h1>
      <div className="App">
        <Doughnut 
          data={data}
          ref={doughnut}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="App">
        <button onClick={updateChart}>Submit</button>
        <label>
          Food: 
          <input value={food} onInput={(food) => setFood(food.target.value)} />
        </label>
      </div>
      
    </div>
    
  );
}

export default App;
