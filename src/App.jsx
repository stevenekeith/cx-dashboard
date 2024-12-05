import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { month: 'Jan 2024', callVolume: 45, satisfaction: 4.5, responseTime: 24 },
  { month: 'Feb 2024', callVolume: 52, satisfaction: 4.7, responseTime: 20 },
  { month: 'Mar 2024', callVolume: 48, satisfaction: 4.6, responseTime: 22 },
  { month: 'Apr 2024', callVolume: 70, satisfaction: 4.8, responseTime: 18 },
  { month: 'May 2024', callVolume: 65, satisfaction: 4.9, responseTime: 16 }
];

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a1a' }}>CX Discovery Call Dashboard</h1>
        <p style={{ color: '#666' }}>Customer Experience Metrics Overview</p>
      </header>

      <div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Monthly Call Volume</h2>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="callVolume" stroke="#8884d8" name="Number of Calls" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Customer Satisfaction Score</h2>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="satisfaction" stroke="#82ca9d" name="Satisfaction Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;