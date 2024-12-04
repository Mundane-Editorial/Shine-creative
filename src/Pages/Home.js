import React from 'react';
import { Box, Typography, Button, Grid, Paper, Pagination } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#E11D48', minHeight: '100vh', padding: 4 }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h3" color="white" align="center" gutterBottom>
          Shine Creative
        </Typography>
        <Typography variant="h6" color="white" align="center" paragraph>
          Pharmaceutical Printing Solutions
        </Typography>
        <Typography variant="body1" color="white" align="center" paragraph>
          Discover our high-quality printing solutions for the pharmaceutical industry. From labels and packaging to educational materials, we deliver exceptional quality and reliability.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="white" size="large">
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Content Section - Grid layout for 2 columns */}
      <Grid container spacing={4}>
        {/* Left Column - Text Content */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 4, backgroundColor: '#ffffff', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              Shine Creative is a leader in providing high-quality printing solutions tailored to the pharmaceutical industry. Our team of experts ensures that every product meets the highest standards of quality and compliance.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 2 }}>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Right Column - Pagination Cards */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 4, backgroundColor: '#ffffff', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Add pagination or list of cards */}
              <Typography variant="body1">Service 1: Pharmaceutical Printing</Typography>
              <Typography variant="body1">Service 2: Packaging Design</Typography>
              <Typography variant="body1">Service 3: Educational Materials</Typography>
            </Box>
            <Pagination count={5} color="primary" sx={{ marginTop: 2, justifyContent: 'center', display: 'flex' }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
