import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleclick = () =>{
    navigate('/Contactme');
  }
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: '#E11D48', color: 'white' }}>
      {/* First section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'start',
          padding: '5%',
          paddingBottom: '10%',
        }}
      >
        {/* Content of the first section */}
        <h2
          style={{
            fontSize: '2.5rem',
            paddingBottom: '0.5rem',
          }}
        >
          Pharmaceutical Printing Solutions
        </h2>

        {/* Paragraph text in Section 1 */}
        <p
          style={{
            fontSize: '1rem',
            padding: '5px 0',
            lineHeight: '1.25',
          }}
        >
          Discover our high-quality printing solutions for the pharmaceutical industry.
          From labels and packaging to educational materials, we deliver exceptional quality and reliability.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam excepturi inventore aliquam, eligendi
          esse quidem illum veritatis iste consequuntur accusantium!
        </p>

        {/* Button in Section 1 */}
        <Button variant="contained"
        onClick={handleclick}
          style={{
            backgroundColor: 'white', color: 'black',
            boxShadow: '0px 40px 60px rgba(0, 60, 0, 0.1)', // Adding shadow here
            '&:hover': {
              boxShadow: '0px 80px 12px rgba(0, 15, 0, 0.2)', // Shadow on hover
            },
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* Second section */}
      <Box sx={{ flex: 1 }}>
        {/* Content of the second section */}
        Section 2
      </Box>
    </Box>
  );
};

export default Home;
