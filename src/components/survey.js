import React, { useState, useEffect } from 'react';
import './survey.css'; 

const SurveyForm = () => {
  // defining variables
  const [age, setAge] = useState('');
  const [hoursPlayed, setHoursPlayed] = useState('');
  const [region, setRegion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // loads submitted variable from local storage 
    const isSubmitted = localStorage.getItem('surveySubmitted');
    if (isSubmitted) {
      setSubmitted(true);
    }
  }, []);

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
        console.log('Data sent successfully!');
        setSubmitted(true);
        // submitted var is sent to local storage
        localStorage.setItem('surveySubmitted', 'true');
        window.location.reload()
      } else {
        console.error('Error while sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='survey-section'>
      {submitted ? (
        <div className='submitted-message'>
          <h1>Thank you for participating!</h1>
          <p>Your survey has been submitted.</p>
        </div>
      ) : (
        <>
          <div className='survey-text'>
            <h1>Survey</h1>
            <h2>Enter the time you spend gaming each day to help us with our data collection</h2>
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
        </>
      )}
    </div>
  );
}

export default SurveyForm;
