import logo from './logo.svg';
import './App.css';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Food', 'Rent', 'Entertainment', 'Utilities', 'Loans', 'Gas'],
  datasets: [
    {
      label: 'Monthly Cost Breakdown',
      data: [223, 1450, 45, 120, 600, 115],
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
  width: 400,
  height: 400,
}

function App() {
  return (
    <div className="App">
      <h1>
        Monthly Cost Breakdown
      </h1>
      <div className="App">
        <Doughnut 
          data={data}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
    
  );
}

export default App;
