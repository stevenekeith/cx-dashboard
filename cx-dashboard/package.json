import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const discoveryScript = {
  introduction: "Hi, I'm [Name] from CX Pilots. Thank you for taking the time to discuss how we might help improve your organization's customer experience program.",
  preparation: [
    "Review company website and LinkedIn profile",
    "Check their current CX initiatives if public",
    "Review contact form information"
  ],
  questions: {
    companyOverview: [
      "Can you tell me about your role in the organization?",
      "What are your primary responsibilities regarding customer experience?",
      "How is your organization currently structured to support CX initiatives?"
    ],
    currentState: [
      "How do you currently measure and manage customer experience?",
      "What tools or platforms are you using for CX management?",
      "What's working well in your current CX program?",
      "What are the main challenges you're facing?"
    ],
    goals: [
      "What are your key CX objectives for the next 12-24 months?",
      "How does your organization define CX success?",
      "What metrics are most important to your leadership team?"
    ],
    specifics: [
      "What's your timeline for implementing CX improvements?",
      "Have you allocated budget for CX initiatives?",
      "Who are the key stakeholders involved in CX decisions?"
    ]
  },
  closing: "Based on what you've shared, I'd like to outline how CX Pilots might help address your specific needs..."
};

const emptyCallRecord = {
  // Contact Information
  firstName: '',
  lastName: '',
  workEmail: '',
  // Company Information
  companyName: '',
  industry: '',
  companySize: '',
  // CX Specific Information
  cxBudget: '',
  cxTeamSize: '',
  projectedStartDate: '',
  cxMaturity: '1',
  // Additional Information
  cxImperatives: '',
  cxGoals: '',
  contactFormInfo: '',
  callNotes: '',
  dateCreated: '',
  lastModified: ''
};

function App() {
  const [callRecords, setCallRecords] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(emptyCallRecord);
  const [showScript, setShowScript] = useState(false);

  // Load records from localStorage on startup
  useEffect(() => {
    const savedRecords = localStorage.getItem('cxPilotsCallRecords');
    if (savedRecords) {
      setCallRecords(JSON.parse(savedRecords));
    }
  }, []);

  // Save records to localStorage when they change
  useEffect(() => {
    localStorage.setItem('cxPilotsCallRecords', JSON.stringify(callRecords));
  }, [callRecords]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const newRecord = {
      ...currentRecord,
      dateCreated: currentRecord.dateCreated || timestamp,
      lastModified: timestamp
    };
    setCallRecords([...callRecords, newRecord]);
    setCurrentRecord(emptyCallRecord);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRecord(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const exportData = () => {
    const dataStr = JSON.stringify(callRecords, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.download = `cx-pilots-calls-${new Date().toISOString().slice(0,10)}.json`;
    link.href = url;
    link.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedRecords = JSON.parse(event.target.result);
        setCallRecords(importedRecords);
      } catch (error) {
        alert('Error importing file. Please ensure it is a valid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a1a' }}>CX Discovery Call Dashboard</h1>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={exportData} style={buttonStyle}>Export Records</button>
          <label style={{ ...buttonStyle, marginLeft: '1rem' }}>
            Import Records
            <input
              type="file"
              accept=".json"
              onChange={importData}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Discovery Script Section */}
        <div style={cardStyle}>
          <h2 style={headerStyle}>Discovery Call Script</h2>
          <button 
            onClick={() => setShowScript(!showScript)}
            style={buttonStyle}
          >
            {showScript ? 'Hide Script' : 'Show Script'}
          </button>
          
          {showScript && (
            <div style={{ marginTop: '1rem' }}>
              <h3 style={subHeaderStyle}>Introduction</h3>
              <p style={textStyle}>{discoveryScript.introduction}</p>
              
              <h3 style={subHeaderStyle}>Preparation</h3>
              <ul style={listStyle}>
                {discoveryScript.preparation.map((item, index) => (
                  <li key={index} style={listItemStyle}>{item}</li>
                ))}
              </ul>

              {Object.entries(discoveryScript.questions).map(([section, questions]) => (
                <div key={section}>
                  <h3 style={subHeaderStyle}>{section.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <ul style={listStyle}>
                    {questions.map((question, index) => (
                      <li key={index} style={listItemStyle}>{question}</li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <h3 style={subHeaderStyle}>Closing</h3>
              <p style={textStyle}>{discoveryScript.closing}</p>
            </div>
          )}
        </div>

        {/* Call Record Form */}
        <div style={cardStyle}>
          <h2 style={headerStyle}>New Call Record</h2>
          <form onSubmit={handleSubmit}>
            <div style={formSectionStyle}>
              <h3 style={subHeaderStyle}>Contact Information</h3>
              <div style={formGridStyle}>
                <FormField
                  label="First Name"
                  name="firstName"
                  value={currentRecord.firstName}
                  onChange={handleInputChange}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={currentRecord.lastName}
                  onChange={handleInputChange}
                />
                <FormField
                  label="Work Email"
                  name="workEmail"
                  type="email"
                  value={currentRecord.workEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={formSectionStyle}>
              <h3 style={subHeaderStyle}>Company Information</h3>
              <div style={formGridStyle}>
                <FormField
                  label="Company Name"
                  name="companyName"
                  value={currentRecord.companyName}
                  onChange={handleInputChange}
                />
                <FormField
                  label="Industry"
                  name="industry"
                  value={currentRecord.industry}
                  onChange={handleInputChange}
                />
                <FormField
                  label="Company Size"
                  name="companySize"
                  value={currentRecord.companySize}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={formSectionStyle}>
              <h3 style={subHeaderStyle}>CX Information</h3>
              <div style={formGridStyle}>
                <FormField
                  label="CX Budget"
                  name="cxBudget"
                  value={currentRecord.cxBudget}
                  onChange={handleInputChange}
                />
                <FormField
                  label="CX Team Size"
                  name="cxTeamSize"
                  value={currentRecord.cxTeamSize}
                  onChange={handleInputChange}
                />
                <FormField
                  label="Projected Start Date"
                  name="projectedStartDate"
                  type="date"
                  value={currentRecord.projectedStartDate}
                  onChange={handleInputChange}
                />
                <FormField
                  label="CX Maturity (1-5)"
                  name="cxMaturity"
                  type="number"
                  min="1"
                  max="5"
                  value={currentRecord.cxMaturity}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={formSectionStyle}>
              <h3 style={subHeaderStyle}>Additional Information</h3>
              <FormField
                label="CX Imperatives"
                name="cxImperatives"
                type="textarea"
                value={currentRecord.cxImperatives}
                onChange={handleInputChange}
              />
              <FormField
                label="CX Goals"
                name="cxGoals"
                type="textarea"
                value={currentRecord.cxGoals}
                onChange={handleInputChange}
              />
              <FormField
                label="Contact Form Information"
                name="contactFormInfo"
                type="textarea"
                value={currentRecord.contactFormInfo}
                onChange={handleInputChange}
              />
              <FormField
                label="Call Notes"
                name="callNotes"
                type="textarea"
                value={currentRecord.callNotes}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" style={{...buttonStyle, marginTop: '1rem'}}>
              Save Record
            </button>
          </form>
        </div>
      </div>

      {/* Recent Records */}
      <div style={{ ...cardStyle, marginTop: '2rem' }}>
        <h2 style={headerStyle}>Recent Call Records</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Company</th>
                <th>Industry</th>
                <th>CX Maturity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {callRecords.slice().reverse().map((record, index) => (
                <tr key={index}>
                  <td>{new Date(record.dateCreated).toLocaleDateString()}</td>
                  <td>{`${record.firstName} ${record.lastName}`}</td>
                  <td>{record.companyName}</td>
                  <td>{record.industry}</td>
                  <td>{record.cxMaturity}</td>
                  <td>
                    <button 
                      onClick={() => setCurrentRecord(record)}
                      style={smallButtonStyle}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Utility Components
function FormField({ label, name, type = 'text', ...props }) {
  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '1rem'
  };

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}:</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          style={{ ...inputStyle, minHeight: '100px' }}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          style={inputStyle}
          {...props}
        />
      )}
    </div>
  );
}

// Styles
const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const headerStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem'
};

const subHeaderStyle = {
  fontSize: '1.1rem',
  marginBottom: '0.5rem',
  marginTop: '1rem'
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#8884d8',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const smallButtonStyle = {
  ...buttonStyle,
  padding: '4px 8px',
  fontSize: '0.9rem'
};

const formSectionStyle = {
  marginBottom: '2rem'
};

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem'
};

const textStyle = {
  marginBottom: '1rem'
};

const listStyle = {
  marginBottom: '1rem',
  paddingLeft: '1.5rem'
};

const listItemStyle = {
  marginBottom: '0.5rem'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  'th, td': {
    padding: '8px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left'
  }
};

export default App;