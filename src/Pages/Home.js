import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate('/Contactme');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,// Enable centering
    // centerPadding: '20px', // Adjust space between cards
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const item = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description of Item 1.',
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description of Item 2.',
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description of Item 3.',
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    },
  ];

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
          padding: '3.5%',
          paddingBottom: '10%',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            paddingBottom: '0.5rem',
          }}
        >
          Pharmaceutical Printing Solutions
        </h2>

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

        <Button
          variant="contained"
          onClick={handleclick}
          style={{
            backgroundColor: 'white',
            color: 'black',
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
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'center',
          paddingBottom: '10%',
        }}
      >
        <Slider
          {...settings}
          style={{
            width: '25vw', // Ensure it takes the desired width
            height: '60vh',
            color: 'white',
          }}
        >
          {item.map((item) => (
            <Paper
              key={item.img}
              variant="outlined"
              sx={{
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '15px',
                boxShadow: '0px 0px 60px 2px rgba(128, 128, 128, 0.5)',
                margin: '0rem 1rem',
                border: 'none',
                padding: '7px',
              }}
            >
              <img
                srcSet={`${item.img}?w=610&h=810&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=610&h=810&fit=crop&auto=format`}
                alt={item.title}
                loading="eager"
                style={{
                  objectFit: 'cover', // Ensures image covers entire area of Paper
                  width: '100%', // Makes image stretch to full width of Paper
                  height: '100%', // Makes image stretch to full height of Paper
                  borderRadius: '10px', // Optional: Adds rounded corners to image
                }}
              />
              {/* Content can go here */}
            </Paper>
          ))}
        </Slider>
        {/* Global Style for .slick-list */}
        <style jsx global>{`
        .slick-list {
          // overflow: hidden;
          color: white;
          background-color: 'none';
          margin: '0rem 1rem';
        }
      `}</style>
      </Box>
    </Box>
  );
};

export default Home;
