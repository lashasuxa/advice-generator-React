import { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState(''); 
  const [adviceId, setAdviceId] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    } catch (error) {
      console.error('Error fetching advice', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#202733'
      }}
    >
      <Box
        className="card"
        sx={{
          width: 540, 
          height: 332, 
          backgroundColor: '#313A48',
          boxShadow: '30px 50px 80px rgba(0, 0, 0, 0.100202)',
          borderRadius: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyContent:"space-between",
          alignItems: 'center',
          padding: 5,
          paddingBottom:7, 
         textAlign:"center"
        }}
      >
        <Box className="header" sx={{fontSize:13,letterSpacing:4.08,color:"#53FFAA"}}>
          <p>ADVICE # <span>{adviceId}</span></p>
        </Box>
        <Box className="advice" >
          <p>{advice}</p> {/* Display the advice fetched from the API here */}
        </Box>
        <img src="/pattern-divider-desktop.svg" alt="divider" />

      </Box>
      <Box
        className="btn"
        component="button"
        onClick={fetchData}
        sx={{
          width: 50, 
          height: 50,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:50,
          background:"#53FFAA",
          marginTop:-3,
          '&:hover': {
            boxShadow: '0px 0px 40px #53FFAA',
          },
        }}
      >
        <img src="/icon-dice.svg" alt="dice" />
      </Box>
    </Box>
  );
}

export default App;
