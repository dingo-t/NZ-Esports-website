import React, { useState } from 'react';
import './survey.css'; 


const SurveyForm = () => {
  const [age, setAge] = useState('');
  const [hoursPlayed, setHoursPlayed] = useState('');
  const [region, setRegion] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('age', age);
    formData.append('hoursPlayed', hoursPlayed);
    formData.append('region', region);

    try {
      const response = await fetch('http://localhost/survey.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success, if needed
        console.log('Data sent successfully!');
      } else {
        // Handle error
        console.error('Error while sending data');
      }
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }

  };

  return (
  <div className='survey-section'>
        <div className='survey-text'>
      <h1>Survey</h1>
      <h2>Enter the time you spend gaming each day to help us with our data colection</h2>
    </div>
    <div className='survey-cont'>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={hoursPlayed}
        onChange={(e) => setHoursPlayed(e.target.value)}
        placeholder="Hours per day"
      />
      <input
        type="text"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Region (optional)"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  </div>
  );
}


export default SurveyForm;
